import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import BookmarkButton from "../components/buttons/BookmarkButton"
import BookmarksSection from "../components/sections/BookmarksSection"
import TimeSection from "../components/sections/TimeSection"
import Weather from "../components/sections/Weather"
import FooterBasic from "../components/sections/FooterBasic"
import Scores from "../components/sections/Scores"
import ScoresTest from "../components/sections/ScoresTest"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Weather />
    <TimeSection></TimeSection>
    <ScoresTest />
    <BookmarksSection />
    <FooterBasic />
  </Layout>
)

export default IndexPage
