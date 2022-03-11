import React from "react";
import Image from "next/image";

const avoList = [
	{
		title: "Most avocados come from Mexico",
		content:
			"While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.",
	},
	{
		title: "The conquistadors were huge fans.",
		content:
			"Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ",
	},
	{
		title: "“Avocado” wasn’t its original name.",
		content:
			"Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”",
	},
	{
		title: "It’s actually a fruit.",
		content:
			"Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.",
	},
	{
		title: "There’s a secret trick to ripening them up quick",
		content:
			"Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.",
	},
];

const About = () => {
	return (
		<>
			<section>
				<figure>
					<h3>5 Surprising Facts About Avocados</h3>
					<Image
						src="/images/avocados.jpg"
						alt="Avocados on a table"
						width={250}
						height={250}
					/>
					<figcaption>
						Originally from
						<a href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/">
							Taste of Home
						</a>
					</figcaption>
				</figure>
				<ol>
					{avoList.map(({ title, content }, index) => (
						<li key={index}>
							<h3>{title}</h3>
							<p>{content}</p>
						</li>
					))}
				</ol>
			</section>
		</>
	);
};

export default About;
