import React from "react"
import styled from "styled-components"
import BookmarkButton from "../buttons/BookmarkButton"

export default function BookmarksSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <BookmarkButton
          title="YouTube"
          src="https://i.pinimg.com/originals/7d/c9/93/7dc993c70d4adba215b87cafdc59d82d.png"
          to="https://youtube.com"
        />
        <BookmarkButton
          title="eBay"
          src="https://logoness.com/wp-content/uploads/2012/09/new-ebay-logo-2012.jpg"
          to="https://www.ebay.co.uk/sh/ovw"
        />
        <BookmarkButton
          title="Amazon"
          src="https://turnerduckworth.com/sites/default/files/styles/case_study_single_image_s_2x/public/2019-03/5_Amazon_Lettermark_2560.jpg?h=a92f03cd&itok=2nBmNv14"
          to="https://www.amazon.co.uk"
        />
        <BookmarkButton
          title="BBC Sport"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/BBC_Sport_%282022%2C_alt_boxed%29.svg"
          to="https://www.bbc.co.uk/sport"
        />
        <BookmarkButton
          title="Reddit"
          src="https://www.designyourway.net/blog/wp-content/uploads/2021/01/reddit-fonts.jpeg"
          to="https://www.reddit.com/r/soccer/"
        />
        <BookmarkButton
          title="Paypal"
          src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
          to="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Fsummary&state=%2F%3Fy%3D1%26z%3D1"
        />
        <BookmarkButton
          title="Apple"
          src="https://logo-sign.com/logos/Apple-Logo-black.jpg"
          to="https://www.apple.com/uk/"
        />
        <BookmarkButton
          title="Netflix"
          src="https://logowik.com/content/uploads/images/netflix-n.jpg"
          to="https://www.netflix.com/browse"
        />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 80px 40px;
  max-width: 992px;
  margin: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: auto;
  grid-row-gap: 60px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  grid-template-columns: repeat(5, auto);

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, auto);
  }
`
