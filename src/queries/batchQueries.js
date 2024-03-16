import { gql } from "@apollo/client";

export const GET_BATCHERS = gql`
  query getBatch {
    batches {
    _id
    startDate
endDate
cost
course
enabled

  }
  }
`;
