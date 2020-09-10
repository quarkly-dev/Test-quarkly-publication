import React from "react";
import theme from "theme";
import { Theme, Text } from "@quarkly/widgets";
import { StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section text-align="center" padding="100px 0">
			<Text text-align="left">
				Текущий вариант
			</Text>
			<Stack>
				<StackItem width="50%" background="--color-orange" height="102px" />
				<StackItem width="50%" background="--color-red" height="102px" />
				<StackItem width="50%" background="--color-indigo" height="102px" />
				<StackItem width="50%" background="--color-primary" height="102px" />
			</Stack>
		</Section>
	</Theme>;
});