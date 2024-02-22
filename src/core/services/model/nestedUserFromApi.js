export const nestedUserFromApi = (user) => ({
  first: user.first,
  middle: user.middle,
  last: user.last,
  phone: user.phone,
  url: user.url,
  alt: user.alt,
  ...{ ...user.address },
  isBusiness: true,
});
