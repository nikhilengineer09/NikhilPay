const serviceData = [
    {
        id:1,
        logo: "https://trak.in/wp-content/uploads/2016/03/Registering-Business-company.jpg",
        title: "Register for free",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },

    {
        id:2,
        logo: "https://kinsta.com/wp-content/uploads/2016/11/ssl-check-1.png",
        title: "Verify your identity",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },

    {
        id:3,
        logo: "data:image/jpeg;base64,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",
        title: "Add recipient's bank details.",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },

    {
        id:4,
        logo: "https://cdn-icons-png.flaticon.com/512/1019/1019607.png",
        title: "Pay for your transfer",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },

    {
        id:5,
        logo: "https://cdn-icons-png.flaticon.com/512/2867/2867900.png",
        title: "Choose an amount to send",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },

    {
        id:6,
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7T5MXHrsLEmT9TE7CyoBjKWIaraxFwXFziuW5OMvBO9pNLlp27d7INwKH1ui5cGu-Zck&usqp=CAU",
        title: "You are ready to rock",
        info: "Lorem ipsum, dolor sit amet etquia quis?"
    },
]

export default serviceData