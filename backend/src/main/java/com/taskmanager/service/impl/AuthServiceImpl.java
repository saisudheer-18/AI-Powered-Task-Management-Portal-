package com.taskmanager.service.impl;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.taskmanager.dto.request.LoginRequest;
import com.taskmanager.dto.request.RegisterRequest;
import com.taskmanager.dto.response.AuthResponse;
import com.taskmanager.dto.response.UserResponse;
import com.taskmanager.entity.User;
import com.taskmanager.exception.InvalidCredentialsException;
import com.taskmanager.exception.UserAlreadyExistsException;
import com.taskmanager.repository.UserRepository;
import com.taskmanager.security.JwtUtil;
import com.taskmanager.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtUtil jwtUtil) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException(
                    "Email already registered");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // Encode password before saving
        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()));

        userRepository.save(user);

        return new AuthResponse(
                null,
                "User Registered Successfully");
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        Optional<User> optionalUser =
                userRepository.findByEmail(
                        request.getEmail());

        if (optionalUser.isEmpty()) {

            throw new InvalidCredentialsException(
                    "Invalid email or password");
        }

        User user = optionalUser.get();

        boolean passwordMatches =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword());

        if (!passwordMatches) {

            throw new InvalidCredentialsException(
                    "Invalid email or password");
        }

        String token =
                jwtUtil.generateToken(
                        user.getEmail());

        return new AuthResponse(
                token,
                "Login Successful");
    }

    @Override
    public UserResponse getCurrentUser() {

        throw new UnsupportedOperationException(
                "Current user endpoint not implemented yet");
    }
}