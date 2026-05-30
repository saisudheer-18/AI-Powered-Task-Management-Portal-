package com.taskmanager.security;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;

    public JwtFilter(
            JwtUtil jwtUtil,
            CustomUserDetailsService userDetailsService) {

        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        try {

            String token = getTokenFromRequest(request);

            System.out.println("TOKEN = " + token);

            if (token != null) {

                String email = jwtUtil.extractUsername(token);

                System.out.println("EMAIL = " + email);

                if (email != null
                        && SecurityContextHolder
                                .getContext()
                                .getAuthentication() == null) {

                    UserDetails userDetails =
                            userDetailsService
                                    .loadUserByUsername(email);

                    System.out.println(
                            "USER FOUND = "
                                    + userDetails.getUsername());

                    boolean valid =
                            jwtUtil.validateToken(
                                    token,
                                    userDetails.getUsername());

                    System.out.println(
                            "TOKEN VALID = " + valid);

                    if (valid) {

                        UsernamePasswordAuthenticationToken authToken =
                                new UsernamePasswordAuthenticationToken(
                                        userDetails,
                                        null,
                                        userDetails.getAuthorities());

                        authToken.setDetails(
                                new WebAuthenticationDetailsSource()
                                        .buildDetails(request));

                        SecurityContextHolder
                                .getContext()
                                .setAuthentication(authToken);

                        System.out.println(
                                "AUTHENTICATION SET SUCCESSFULLY");
                    }
                }
            }

        } catch (Exception ex) {

            System.out.println(
                    "JWT ERROR = " + ex.getMessage());

            ex.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    private String getTokenFromRequest(
            HttpServletRequest request) {

        String bearerToken =
                request.getHeader("Authorization");

        if (StringUtils.hasText(bearerToken)
                && bearerToken.startsWith("Bearer ")) {

            return bearerToken.substring(7);
        }

        return null;
    }
}