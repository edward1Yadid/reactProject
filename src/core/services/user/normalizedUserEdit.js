const normalizedUserEdit = (user) => ({
    name: {
        first: user.first,
        last: user.last,
        middle: user.middle
    },
    phone: user.phone,
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        zip: user.zip,
        houseNumber: user.houseNumber,
    },
    image: {
        url: user.url,
        alt: user.alt
    },
    isBusiness: user.isBusiness
});

export default normalizedUserEdit;