import React from "react";
import theme from "theme";
import { Theme, Text } from "@quarkly/widgets";
import { StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Text font="--headline3">
			Gap 10px
		</Text>
		<Text font="--lead" margin="36px 0px 16px 0px">
			without-margin
		</Text>
		<Components.TextLoopComp />
		<Stack background="--color-light" gap="20px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу начать писать прям с угла :(
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Stack background="--color-light" gap="50px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу начать писать прям с угла :(
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Section>
			<Text font="--headline1" margin="36px 0px 46px 0px">
				with-margin
			</Text>
			<Stack background="--color-light" gap="39px">
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
			</Stack>
			<Stack background="--color-light" gap="20px" margin="40px -10px -10px -10px">
				<StackItem width="25%" background="--color-orange" height="100px">
					<Text margin="0px 0px 0px 0px">
						Начинаю писать текст прям с угла
					</Text>
				</StackItem>
				<StackItem width="25%" background="--color-secondary" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
			</Stack>
		</Section>
		<Section>
			<Text font="--headline1" margin="36px 0px 16px 0px">
				with-margin
			</Text>
			<Stack gap="60px" margin="0px 0px 0px 0px">
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
				<StackItem width="33.33%" background="--color-indigo" height="100px" />
			</Stack>
			<Stack background="--color-light" gap="40px" margin="0px 0px 0px 0px">
				<StackItem width="25%" background="--color-orange" height="100px">
					<Text margin="0px 0px 0px 0px">
						Начинаю писать текст прям с угла
					</Text>
				</StackItem>
				<StackItem width="25%" background="--color-secondary" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-indigo" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
				<StackItem width="25%" background="--color-purple" height="100px" />
			</Stack>
		</Section>
		<Text font="--headline3" margin="36px 0px 16px 0px">
			Gap 50px
		</Text>
		<Text font="--lead" margin="36px 0px 16px 0px">
			without-margin
		</Text>
		<Stack background="--color-light" gap="50px" margin="0px 0px 0px 0px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Не могу писать прям с угла
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
		<Text font="--lead" margin="36px 0px 16px 0px">
			with-margin
		</Text>
		<Stack background="--color-light" gap="40px">
			<StackItem width="50%" background="--color-orange" height="100px">
				<Text margin="0px 0px 0px 0px">
					Начинаю писать текст прям с угла
				</Text>
			</StackItem>
			<StackItem width="50%" background="--color-secondary" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="33.33%" background="--color-indigo" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
			<StackItem width="25%" background="--color-purple" height="100px" />
		</Stack>
	</Theme>;
});