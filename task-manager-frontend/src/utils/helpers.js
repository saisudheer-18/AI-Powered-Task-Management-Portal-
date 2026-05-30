export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString();
};

export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const extractErrorMessage = (error) => {
  if (error.response && error.response.data) {
    return error.response.data.message || error.response.data.error || 'A server error occurred.';
  } else if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
};
