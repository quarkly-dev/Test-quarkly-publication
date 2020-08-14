import React from "react";
import theme from "theme";
import { Theme, Text, Button, Box, Image, Icon, Link, List, Input } from "@quarkly/widgets";
import { Section, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdArrowDownward, MdHelp, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Section text-align="center" padding="100px 0">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px 0">
				Button
			</Button>
		</Section>
		<Section text-align="center" background-color="--primary" color="--light" padding="100px 0">
			<Text
				as="h5"
				font="--lead"
				margin="20px 0 10px 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="140px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey, I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize  in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.{" "}
				<br />
				I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{"  "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
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
						This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
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
						Hey, I’m David
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover" padding="64px 0" color="--light" font="--base">
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="140px 0" background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80) 50% 15%/cover" color="--light" font="--base">
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Mary
					<br />
					Cornell
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					About me
				</StackItem>
				<StackItem width="25%" lg-width="50%">
					<div>
						<div>
							<div>
								My name is Mary Cornell, born and raised in France.
							</div>
						</div>
					</div>
				</StackItem>
				<StackItem width="25%" lg-width="50%">
					<div>
						I've been working as a professional photographer and videographer for more than 12 years.
					</div>
				</StackItem>
				<StackItem width="25%" lg-width="50%">
					CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</StackItem>
			</Stack>
		</Section>
		<Section background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover" padding="64px 0" color="--light" font="--base">
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						We are born of the classics
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						High-quality craftsmanship, unparalleled service, and value for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<List
				display="flex"
				md-fxd="column"
				flex-direction="row"
				align-items="center"
				justify-content="center"
				variant="--lead"
				list-style-type="none"
				margin="-6px 0 16px"
				padding="0"
				font="--lead"
			>
				<Link
					href="/"
					color="--light"
					hover-color="--primary"
					text-decoration-line="none"
					display="inline-block"
					padding="6px 12px"
				>
					About
				</Link>
				<Link
					href="/"
					color="--light"
					hover-color="--primary"
					text-decoration-line="none"
					display="inline-block"
					padding="6px 12px"
				>
					Services
				</Link>
				<Link
					href="/"
					color="--light"
					hover-color="--primary"
					text-decoration-line="none"
					display="inline-block"
					padding="6px 12px"
				>
					Portfolio
				</Link>
				<Link
					href="/"
					color="--light"
					hover-color="--primary"
					text-decoration-line="none"
					display="inline-block"
					padding="6px 12px"
				>
					Blog
				</Link>
				<Link
					href="/"
					color="--light"
					hover-color="--primary"
					text-decoration-line="none"
					display="inline-block"
					padding="6px 12px"
				>
					Contacts
				</Link>
			</List>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Contact
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Email us, we would love to hear from you
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree>
						<Stack gap="16px">
							<StackItem width="50%">
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				Q&A
			</Text>
			<Box margin="36px 0" padding="0 0 0 54px" position="relative" max-width="800px">
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Is there life on Mars?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box margin="36px 0" padding="0 0 0 54px" position="relative" max-width="800px">
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					How much salt is in the ocean?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box margin="36px 0" padding="0 0 0 54px" position="relative" max-width="800px">
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Why is the sky blue?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
		</Section>
		<Section padding="64px 0" color="--dark">
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Text as="h2" font="--headline1" margin="0 0 8px 0">
						FAQ
					</Text>
					<Text as="p" font="--lead" margin="0" color="--greyD2">
						Need answers? We got’em
					</Text>
				</StackItem>
				<StackItem width="66.66%" md-width="100%">
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Text as="h3" font="--headline3" margin="12px 0">
								Is there life on Mars?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Text as="h3" font="--headline3" margin="12px 0">
								Why is the sky blue?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Text as="h3" font="--headline3" margin="12px 0">
								When will we get there?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Text as="h3" font="--headline3" margin="12px 0">
								How much salt is in the ocean?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" color="--dark">
			<Text as="h1" font="--headline1" margin="0 0 24px 0">
				FAQ
			</Text>
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Text as="h3" font="--headline3" margin="12px 0">
						Is there life on Mars?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Text as="h3" font="--headline3" margin="12px 0">
						When will we get there?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Text as="h3" font="--headline3" margin="12px 0">
						How much salt is in the ocean?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Awesome Company
			</Text>
			<List
				margin="0"
				padding="0"
				display="flex"
				list-style-type="none"
				justify-content="center"
				md-align-items="center"
				md-flex-direction="column"
				flex-direction="row"
				font="--base"
				font-weight="700"
			>
				<Link
					href="/"
					color="--dark"
					display="inline-block"
					text-decoration="none"
					padding="8px 16px"
					cursor="pointer"
					hover-color="--primary"
				>
					About
				</Link>
				<Link
					href="/"
					color="--dark"
					display="inline-block"
					text-decoration="none"
					padding="8px 16px"
					cursor="pointer"
					hover-color="--primary"
				>
					Services
				</Link>
				<Link
					href="/"
					color="--dark"
					display="inline-block"
					text-decoration="none"
					padding="8px 16px"
					cursor="pointer"
					hover-color="--primary"
				>
					Portfolio
				</Link>
				<Link
					href="/"
					color="--dark"
					display="inline-block"
					text-decoration="none"
					padding="8px 16px"
					cursor="pointer"
					hover-color="--primary"
				>
					Blog
				</Link>
				<Link
					href="/"
					color="--dark"
					display="inline-block"
					text-decoration="none"
					padding="8px 16px"
					cursor="pointer"
					hover-color="--primary"
				>
					Contact
				</Link>
			</List>
		</Section>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<List
					margin="0"
					padding="0"
					display="flex"
					list-style-type="none"
					justify-content="center"
					sm-align-items="center"
					sm-flex-direction="column"
					flex-direction="row"
					font="--base"
					font-weight="700"
				>
					<Link
						href="/"
						color="--dark"
						display="inline-block"
						text-decoration="none"
						padding="8px 16px"
						cursor="pointer"
						hover-color="--primary"
					>
						About
					</Link>
					<Link
						href="/"
						color="--dark"
						display="inline-block"
						text-decoration="none"
						padding="8px 16px"
						cursor="pointer"
						hover-color="--primary"
					>
						Services
					</Link>
					<Link
						href="/"
						color="--dark"
						display="inline-block"
						text-decoration="none"
						padding="8px 16px"
						cursor="pointer"
						hover-color="--primary"
					>
						Portfolio
					</Link>
					<Link
						href="/"
						color="--dark"
						display="inline-block"
						text-decoration="none"
						padding="8px 16px"
						cursor="pointer"
						hover-color="--primary"
					>
						Blog
					</Link>
					<Link
						href="/"
						color="--dark"
						display="inline-block"
						text-decoration="none"
						padding="8px 16px"
						cursor="pointer"
						hover-color="--primary"
					>
						Contact
					</Link>
				</List>
			</Box>
		</Section>
		<Section color="--light" padding="100px 0" position="relative" background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)">
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Box padding="0 0 0 64px" margin="32px 0 64px 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="32px 0 64px 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								hello@company.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="32px 0 64px 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+1 (234) 567-89-00
							<br />
							+1 (234) 567-89-00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us a message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" font="--base" color="--dark">
			<Stack>
				<StackItem text-align="center" width="50%" lg-width="100%" lg-order="2">
					<Stack>
						<StackItem width="50%" sm-width="100%" background="--color-lightD1" padding="20px">
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Nathan K. Joe
							</Text>
							<Text color="--grey" margin="0">
								CEO
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%" background="--color-lightD1" padding="20px">
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								David R. Lema
							</Text>
							<Text color="--grey" margin="0">
								Developer
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%" background="--color-lightD1" padding="20px">
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Janet E. Morey
							</Text>
							<Text color="--grey" margin="0">
								Marketer
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%" background="--color-lightD1" padding="20px">
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Claire R. Peery
							</Text>
							<Text color="--grey" margin="0">
								Designer
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="50%" lg-width="100%" lg-margin-bottom="24px">
					<Text color="--grey" letter-spacing="1px" text-transform="uppercase" margin="0 0 10px 0">
						Meet our team
					</Text>
					<Text as="h2" font="--headline2" md-font="--headline3" margin="0">
						The smartest people work every day to provide the best service and to make  clients happy
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Our Team
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						CEO
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Marketer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Claire R. Peery
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Hi! I'm a heading. Click here to add your own text and edit me.  It’s a piece of cake.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="auto 0px 0px 0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			min-height="600px"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%">
					<Text margin="0px" max-width="600px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="60px 0" background="--color-light" display="flex" flex-direction="column">
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
						17
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="60px 0" background="--color-light" display="flex" flex-direction="column">
			<Stack color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
						17
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Button
			position="fixed"
			top="20px"
			left="20px"
			z-index="2"
			href="/"
		>
			Header title
		</Button>
	</Theme>;
});