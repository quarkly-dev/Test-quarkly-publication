import React from "react";
import theme from "theme";
import { Theme, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<meta name={"description"} content={"asas"} />
			<meta property={"og:description"} content={"asas"} />
			<meta property={"og:image"} content={"https://test-upl.quarkly.io/5e672c782db4d10024433459/images/Commerce%20Cream%20%7C%20A%20Kids%20Book%20About%202020-09-02%2014-02-39.jpg?v=2020-09-08T11:58:17.895Z"} />
		</Helmet>
		<Menu display="flex">
			<Override slot="item-index" lg-display="none" />
			<Override slot="link" lg-padding="8px 20px 10px 20px" />
		</Menu>
		<Section background="--color-darkL2" padding="64px 0">
			<Stack>
				<StackItem
					color="--dark"
					padding="98px 64px"
					width="50%"
					lg-width="100%"
					background="--color-light"
				>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						This is one of the world's greatest cultural crossroads where asdAfrica meets the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Stack>
						<StackItem
							width="100%"
							lg-width="33.3%"
							md-width="100%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
						/>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0">
			<Stack>
				<StackItem
					width="50%"
					margin-right="-20%"
					padding-bottom="120%"
					background="url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover"
					lg-width="100%"
					lg-margin-right="0"
					lg-padding-bottom="80%"
				/>
				<StackItem
					padding="98px 64px"
					width="50%"
					margin-left="-20%"
					margin-top="36px"
					background="--color-red"
					color="--light"
					mix-blend-mode="lighten"
					lg-width="100%"
					lg-margin-left="0"
					lg-margin-top="0"
				>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About me
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Hey I’m David
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						My name is David R. Lema, born and raised in Norway, worked as a professional Photographer for more than 12 years, awarded Photographer of The Year in 2014 and Best Wedding Photographer of The Year 2014-2019 by NFF - The Norwegian Photographers Association.
					</Text>
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});