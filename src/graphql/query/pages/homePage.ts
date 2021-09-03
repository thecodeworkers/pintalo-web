import { homeId } from '@utils/pageIds'

const home = `
  page(id: "${homeId}") {
    home {
      mainBanner {
        slogan
        title
        firstButton {
          title
          button {
            text
            link
          }
        }
        secondButton {
          title
          button {
            text
            link
          }
        }
        background {
          mediaItemUrl
          slug
        }
        titleStepTwo
        titleStepThree
        titleStepFour
      }
      secondBanner {
        firstBanner {
          title
          subtitle
          text
          button {
            text
            link
          }
          background {
            mediaItemUrl
            slug
          }
        }
        secondBanner {
          title
          subtitle
          button {
            text
            link
          }
          background {
            mediaItemUrl
            slug
          }
        }
        thirdBanner {
          title
          subtitle
          button {
            text
            link
          }
          background {
            mediaItemUrl
            slug
          }
        }
      }
      thirdBanner {
        firstBanner {
          title
          button {
            text
            link
          }
          background {
            mediaItemUrl
            slug
          }
          patners {
            image {
              mediaItemUrl
              slug
            }
          }
        }
        secondBanner {
          title
          subtitle
          portrait {
            mediaItemUrl
            slug
          }
          lowTitle
          lowSubtitle
          lowButton {
            text
            link
          }
          button {
            text
            link
          }
          background {
            mediaItemUrl
            slug
          }
        }
      }
      fourthBanner {
        title
        content
        background {
          mediaItemUrl
          slug
        }
      }
    }
  }
`

export default home
