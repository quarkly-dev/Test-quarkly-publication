import React from "react";
import theme from "theme";
import { Theme, Text, Button, List, Box } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section text-align="center" padding="100px 0">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				The headline about us
			</Text>
			<Text as="p" font="--lead" margin="20px 0">
				Tell what your business is about, what you do and how you do it. Writean engaging story describing your work experience and how passionate youare about what you do. Describe your partners and what you've achievedtogether. Share why your goods and services are special. Provide acouple of examples to prove your point.
			</Text>
			<Button font="--lead" margin="20px 0">
				Button text
			</Button>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				The headline about us
			</Text>
			<List />
			<Text as="p" font="--lead" margin="20px 0">
				Tell what your business is about, what you do and how you do it. Writean engaging story describing your work experience and how passionate youare about what you do. Describe your partners and what you've achievedtogether. Share why your goods and services are special. Provide acouple of examples to prove your point.
			</Text>
			<Button font="--lead" margin="20px 0">
				Button text
			</Button>
		</Section>
		<Box />
	</Theme>;
});