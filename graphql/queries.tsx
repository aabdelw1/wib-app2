import gql from 'graphql-tag'

const Queries = {
  ALL_USERS: gql`
    query allUsers {
      allUsers {
        email
        password
        firstName
        lastName
        gender
        doa
        groups
        flames{
          name
          meetingOrigin
          hot
          crazy
          regret
          involvement
          talkingTime
          physicalAltercations
          timeLine
          locations{
            lat
            long
            base
          }
        }
      }
    }
  `,
  ONE_USER: gql`
    query oneUser($_id: ID!) {
      oneUser(_id: $_id) {
        _id
        __typename
        email
        password
        firstName
        lastName
        gender
        doa
        groups
        flames{
          name
          meetingOrigin
          hot
          crazy
          regret
          involvement
          talkingTime
          physicalAltercations
          timeLine
          locations{
            lat
            long
            base
          }
        }
      }
    }
    `
}

export default Queries