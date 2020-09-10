import React from "react";
import theme from "theme";
import { Theme, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Menu, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<meta name={"description"} content={"ФЫВАЫВФЫВ ФЫВ фЫВ"} />
			<meta property={"og:description"} content={"ФЫВ ФЫВ "} />
		</Helmet>
		<Menu />
		<Image width="64px" height="64px" />
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Image src="https://test-upl.quarkly.io/5e672c782db4d10024433459/images/Commerce%20Cream%20%7C%20A%20Kids%20Book%20About%202020-09-02%2014-02-39.jpg?v=2020-09-08T11:58:17.895Z" max-width="100%" srcSet="https://test-upl.quarkly.io/5e672c782db4d10024433459/images/Commerce%20Cream%20%7C%20A%20Kids%20Book%20About%202020-09-02%2014-02-39.jpg?v=2020-09-08T11:58:17.895Z " />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://test-upl.quarkly.io/5e672c782db4d10024433459/images/contest-results-wreath.svg?v=2020-09-08T11:56:44.578Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px" />
			</Box>
			<Components.NewComp design="vertical" size="3" show="5" active="3" />
		</Section>
	</Theme>;
});