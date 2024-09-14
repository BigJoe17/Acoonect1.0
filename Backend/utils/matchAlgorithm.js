function calculateMatchScore(user, otherUser) {
  let score = 0;

  // 1. Check major
  if (user.major === otherUser.major) {
      score += 40;  // 40% for matching major
  }

  // 2. Check interests
  const commonInterests = user.interests.filter(interest =>
      otherUser.interests.includes(interest)
  );
  score += user.interests.length > 0 ? (commonInterests.length / user.interests.length) * 50 : 0; // 50% for matching interests

  // 3. Check semester (give partial score for close semesters)
  const semesterDifference = Math.abs(user.semester - otherUser.semester);
  if (semesterDifference === 0) {
      score += 10;  // Same semester
  } else if (semesterDifference <= 1) {
      score += 5;  // Close semester
  }

  return score;
}

// Matchmaking function to find best matches for a user
function findMatches(user, allUsers) {
  // Exclude the user themselves from potential matches
  const potentialMatches = allUsers.filter(otherUser => otherUser.email !== user.email);

  // Calculate match scores
  const matches = potentialMatches.map(otherUser => ({
      user: otherUser,
      score: calculateMatchScore(user, otherUser),
  }));

  // Sort users by highest match score
  matches.sort((a, b) => b.score - a.score);

  // Return the top matches
  return matches.slice(0, 5);  // Top 5 matches
}

export { calculateMatchScore, findMatches };
