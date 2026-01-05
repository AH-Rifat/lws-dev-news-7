const timeAgo = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInMs = now - createdDate;

  if (diffInMs < 0) return "Just now";

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) return "Just now";
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  if (diffInDays < 7)
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  if (diffInWeeks < 4)
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
  if (diffInMonths < 12)
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
};

const formatCount = (num) => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  return num.toString();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { timeAgo, formatCount, formatDate };
