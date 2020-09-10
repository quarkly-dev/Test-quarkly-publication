import React from "react";
import theme from "theme";
import { Theme, Text, Image, Icon } from "@quarkly/widgets";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light url(https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 0% 0%/100%"
			display="flex"
			flex-direction="column"
			lg-background="linear-gradient(0deg,rgba(0, 0, 0, 0.31) 0%,rgba(0, 0, 0, 0.69) 100%),#191E22 url(https://images.unsplash.com/photo-1534185372994-55f9e64235c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center /cover"
		>
			<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593892022515-f4849c4844c3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 0% 0% /auto repeat scroll padding-box" />
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--light"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 72px/1.2 --fontFamily-sans"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
				lg-text-shadow="2px 1px 2px --color-grey"
				text-shadow="1px 1px 0 rgba(247, 251, 255, 0.28)"
			>
				Hi! I'm a heading. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Image width="64px" />
			<Icon category="md" icon={MdFace} size="114px" />
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="url(https://images.unsplash.com/photo-1593886569138-50b4b0c0f3ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50%/100%,--color-light url(https://artemzhigalin.ru/src/Quarkly_2020-07-06_23-02-35.jpg) 0% 0%/cover"
			display="flex"
			flex-direction="column"
			box-shadow="--xxl,--m"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--light"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base" background=",rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1573504816327-07f3bf7accac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 0% 0% /cover repeat scroll padding-box">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="normal 900 72px/1.2 --fontFamily-sans"
						md-font="--headline2"
						color="--light"
						max-width="850px"
						lg-font="--headline2"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="--light">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="--light">
						Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
			<Stack>
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
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Image width="64px" height="100%" />
	</Theme>;
});