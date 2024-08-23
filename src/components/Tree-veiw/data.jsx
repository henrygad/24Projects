const data = [

    {
        label: "home",
        to: "/"
    },
    {
        label: "profile",
        to: "profile",
        children: [
            {
                label: "details",
                to: "details",
                children: [
                    {
                        label: "location",
                        to: "location"
                    },
                ]
            },

        ]
    },
    {
        label: "sittings",
        to: "sittings",
        children: [
            {
                label: "account",
                to: "account"
            },
            {
                label: "security",
                to: 'security',
                children: [
                    {
                        label: "password",
                        to: "password"
                    },
                    {
                        label: "login",
                        to: "login",
                        children: [
                            {
                                label: "random",
                                to: "random",
                            }
                        ]
                    },
                    {
                        label: "delete",
                        to: "delete"

                    },
                ]
            }
        ]
    },
];

export default data;