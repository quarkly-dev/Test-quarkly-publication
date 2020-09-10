import React from "react";
import theme from "theme";
import { Theme, Box, Button, Hr, Icon, Image, Text, List, Link, Input } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Section>
			<Box background="--color-lightD2" min-width="100px" min-height="100px" />
		</Section>
		<Section>
			<Button>
				Button
			</Button>
		</Section>
		<Section>
			<Hr border-width="1px 0 0 0" min-height="10px" min-width="100%" />
		</Section>
		<Section>
			<Icon category="md" icon={MdFace} size="48px" />
		</Section>
		<Section>
			<Image width="100px" height="100px" />
		</Section>
		<Section>
			<Text>
				Some text
			</Text>
			<List>
				<Text>
					First item
				</Text>
				<Text>
					First item
				</Text>
				<Text>
					First item
				</Text>
				<Text>
					First item
				</Text>
			</List>
			<Link href="#">
				Some text
			</Link>
			<Input />
		</Section>
	</Theme>;
});