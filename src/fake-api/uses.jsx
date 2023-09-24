import Button from "~/components/button/index.jsx";

export const uses = [
    {
        title: "Computer",
        // eslint-disable-next-line react/no-unescaped-entities
        children: <span> I use a 2019 16" <Button as="a" variant="text">Macbook Pro</Button> (i9/32GB/512gb) for everything (work + personal). The physical escape key and fixed keyboard is amazing. </span>
    },
    {
        title: "Chair",
        // eslint-disable-next-line react/no-unescaped-entities
        children: <span> When I sit, I sit on an <Button as="a" variant="text">Herman Miller Mirra 2</Button>, but I stand almost 100% of the time, so the chair doesn’t do me much good. </span>
    },
    {
        title: "Desk",
        // eslint-disable-next-line react/no-unescaped-entities
        children: <span> My desk is a <Button as="a" variant="text">Fully Jarvis standing desk</Button> (which I love) with the Bamboo top (which I don't recommend). If you're looking for a great sit-stand desk, I highly recommend Jarvis. Also, purchase directly from Fully vs. Amazon. Fully's customer support is incredible. </span>
    }
]