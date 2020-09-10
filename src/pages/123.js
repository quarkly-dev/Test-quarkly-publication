import React from "react";
import theme from "theme";
import { Theme, Icon, Button, Box, Text, Image } from "@quarkly/widgets";
import { StackItem, Stack, GoogleMap, Override, Section } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Box
			position="relative"
			top="0px"
			left="0px"
			bottom="0px"
			right="0px"
			height="4000px"
		>
			<Icon
				category="md"
				icon={MdFace}
				position="absolute"
				size="198px"
				bottom="auto"
				height="202.2236328125px"
				left="490px"
				right="auto"
				top="280px"
				width="230.77587890625px"
				z-index="5"
			/>
			<Button
				position="absolute"
				bottom="auto"
				height="40px"
				left="342px"
				right="auto"
				top="161px"
				width="95.6719px"
			>
				Button
			</Button>
			<Box
				position="absolute"
				width="580.3622952898551px"
				height="414.1792228260869px"
				bottom="auto"
				left="auto"
				right="332px"
				top="569px"
				overflow-y="hidden"
				overflow-x="hidden"
			/>
			<Stack position="absolute" left="0px" right="958.7771875000001px" width="382.2268125px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}First Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Text
				position="absolute"
				bottom="auto"
				height="114.93831380208334px"
				top="223px"
				left="341px"
				right="auto"
				width="283.8286015625px"
			>
				Some textas as dasd asdas dasd sad asd asd asd asd asd asd asd fgre gr asd ag sgfreererer er erebgbgrb
			</Text>
			<Image
				width="360.0384384920635px"
				height="330.9028988095238px"
				position="absolute"
				bottom="auto"
				left="auto"
				right="134px"
				top="642px"
				border-color="--color-greyD2"
				background="--color-indigo"
			/>
			<GoogleMap
				position="absolute"
				bottom="3571.2062202380953px"
				height="306.79277976190474px"
				left="883.6450892857142px"
				right="60px"
				top="122px"
				width="348.3549107142857px"
			/>
			<Section
				padding="100px 0"
				sm-padding="40px 0"
				position="absolute"
				bottom="auto"
				height="302px"
				left="25px"
				right="auto"
				top="389px"
				width="573.1304209183673px"
			>
				<Override slot="SectionContent" align-items="center" />
				<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
					About Us
				</Text>
				<Text as="p" font="--lead" margin="20px 0 0 0" text-align="center">
					Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				</Text>
				<Button font="--lead" margin="20px">
					Button
				</Button>
			</Section>
		</Box>
	</Theme>;
});