import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "user", url: process.env.USER_API_URL },
    { name: "houseAccount", url: process.env.HOUSE_ACCOUNT_API_URL },
  ],
});

const server = new ApolloServer({ gateway });

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
