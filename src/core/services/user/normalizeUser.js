const normalizeUser = (user) => ({
    name: {
        first: user.first,
        last: user.last,
        middle: user.middle
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    image: {
        url: user.url,
        alt: user.alt
    },
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        zip: user.zip,
        houseNumber: user.houseNumber,
    },

    isBusiness: true
});

export default normalizeUser;