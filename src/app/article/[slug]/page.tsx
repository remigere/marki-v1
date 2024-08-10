import { Container } from "@/design-system/container"
import { Cover } from "@/ui/components/article/cover"
import { Footer } from "@/ui/components/article/footer"
import { Headings } from "@/ui/components/article/headings"
import { Recommendations } from "@/ui/components/article/recommendations"
import { Section } from "@/ui/components/article/section"
import { NextPage } from "next"

const Article: NextPage = () => (
	<main>
		<Container className="max-w-4xl mx-auto space-y-8 py-10 sm:py-14">
			<Headings
				description="Marki serves up an exciting, reverse-aging protocol."
				title="The Blueprint"
			/>
			<Cover
				src={"/img/the-blueprint-blog-post.png"}
				alt={"The Blueprint cover"}
			/>
			<Section
				title={"intro"}
				paragraphs={
					"What if you could start to change the world by changing yourself? After years of overeating, drinking too much, and battling depression, venture capitalist and author Bryan Johnson decided to hard reset his life. He resolved to emphasize longevity over self-destruction. Through intense self-reflection and consultation with medical experts, Bryan developed (and continues to develop) the Blueprint Protocol: a radical new way to approach health and well-being. It aims to not just slow aging but to help heal past negative health decisions – allowing those who adhere to Blueprint to feel better, look better, and live longer lives. The Blueprint Protocol is future-focused. It’s science-based. And it’s here to revolutionize how you care for your body."
				}
			/>
			<Section
				title={"PHILOSOPHY"}
				paragraphs={[
					"Blueprint asks us to re-evaluate our relationship with food. Many people spend a lot of their precious hours thinking about, planning around, and pursuing food – whether it’s looking up the latest restaurants on Instagram or picking out just the right hors d’oeuvres for a dinner party. This is not an optimal use of your time, and most people are emotional consumers of food, eating what is tastiest or most comforting rather than what your body actually needs. By following Blueprint, what you consume aligns with what your biological systems need to hum along – and at the same time, you free up mental space for other more valuable pursuits.",
					"To follow Blueprint, you eat three meals daily. Two of the three meals (Super Veggie and Nutty Pudding) tend to be the same each day, with just some small customization to fit your own personal taste. For example, Bryan Johnson blends the Super Veggie ingredients into a thick paste, but others might prefer to eat theirs chunky. Once you figure out what iterations of Super Veggie and Nutty Pudding taste best for you, you no longer need to spend time experimenting with it – so you can use that time to work out, invest in your side hustle, or enjoy a beautiful sunrise. The third meal of the day revolves around berries, nuts, seeds, and vegetables. Various recipes are available on the Blueprint Protocol website, and they’re constantly being tweaked to provide optimal results.",
					"It's also important to note that all Blueprint recipes are vegan by default, but meat and/or dairy can be added to many of the recipes to meet nutritional needs or cater to taste preferences. In addition to the food mentioned above, supplements are a key component of the Blueprint Protocol. On the Blueprint website, Bryan lists the supplements he personally takes – including amount and time of day. Note that it’s best to consult your doctor before starting a supplement regiment.",
				]}
			/>
			<Section
				title={"BEHAVIORAL CHANGES & CONSIDERATIONS"}
				paragraphs={[
					"Compared to the total overhaul of your culinary life, the behavioral changes you need to make as part of the Blueprint Protocol are relatively simple to implement. In fact, many of them are the sorts of habits that a doctor or well-meaning family member might encourage you to try out and stick to!",
					"The cornerstone of the entire Blueprint Protocol is getting enough good-quality sleep. As Bryan Johnson says, “Sleep is the new coffee,” and he has prioritized sleep hygiene for years, even before developing Blueprint. Sleep is essential to mental wellness, cognition, and the smooth operation of bodily systems – and it’s unlikely that you’ll see major improvements in your health if you’re not sleeping deeply or sleeping a sufficient amount. For Bryan, key components of achieving proper sleep include having a consistent bedtime, limiting food/liquid consumption in the evening, sleeping in a blacked-out room, having at least an hour of time separating work and sleep, and making use of a temperature-controlled mattress. If you’re a caffeine addict, you should consider limiting or entirely eliminating your use of the stimulant; the same goes for alcohol. And workaholics should make use of blue light-blocking glasses as well as screen color/brightness adjustment tools to make sure being at the computer doesn’t impact your sleep.",
					"As part of the Blueprint Protocol, oral hygiene also gets special mention and consideration. Whole-body health is fundamentally linked to the health of your teeth and gums – and poorly maintained gums can lead to a higher risk of diabetes, heart disease, respiratory issues, mental ailments, and even early death. Thus, it’s not enough to just brush your teeth twice a day. It’s best to talk to your dentist to get their personal recommendations, but adding flossing and tongue-scraping to your daily oral hygiene routine is a good baseline; for those with a history of gum issues or gum sensitivity, a “water flosser” would also be a good investment.",
					"Naturally, physical fitness is the final key component of the Blueprint Protocol. Bryan has shared his fitness routine on the Blueprint Protocol website and has also produced multiple videos showing just how he goes through each exercise. Bryan works out in the morning each day, and the entire sequence of exercises takes between 45 and 60 minutes to complete. The workout helps to maintain good posture and improves the body’s ability to use oxygen, but the ultimate goals – as with all components of the Blueprint Protocol – are to slow aging speed and maintain optimal health.",
				]}
			/>
			<Section
				title={"MONITORING"}
				paragraphs={[
					"To ensure that this strict exercise, nutrition, and behavioral regimen is having the intended effect, Bryan regularly undergoes a battery of tests. Some of these tests are simple and can be done yourself at home, while others must be done at a medical facility. A number of the tests may be covered by your health insurance, and in fact you may routinely do them anyway – but other, more specific or less common tests may be more difficult to schedule. Speaking with your doctor (as well as your health insurance provider) is necessary to determine which tests best fit your budget, goals, and pre-existing conditions. For example, glucose monitoring may be even more essential for a pre-diabetic person, and someone with gradual sight or hearing loss will be likely to regularly check their eyes and ears anyway. Many people of a certain age also get regular checks for certain kinds of cancer. Consider your reasons for wanting to follow the Blueprint Protocol to determine which forms of monitoring are best for you.",
					"Some of the easiest health indicators to monitor are your weight and body temperature – just pick up a scale and a digital thermometer, checking first that they are well-regarded and accurate. You can also track your waist circumference using a good old-fashioned tape measure. There are apps to help you measure how long and how deeply you sleep, and your gym likely has the equipment to measure other body composition indicators, such as body fat percentage. These indicators should be checked at a regular, though not excessive, interval to ensure that you are achieving your health goals.",
					"A critical external factor that Bryan monitors is the air quality in his home. He runs an air purifier in his bedroom to aid in sleep quality, recognizing that bad air quality can have myriad negative long-term impacts on health. Exposure to dust, pet dander, nitrogen dioxide, and other pollutants can be detrimental to your skin, your respiratory health, and even your mental capacity. Exercising in a room with bad air quality can increase the bodily damage caused by these pollutants, as well – so running an air purifier in your home is essential to well-being. Some air purifiers have readouts that indicate air quality, while others can be connected to apps for more in-depth monitoring.",
					"Besides keeping track of the indicators mentioned previously, Bryan also runs a battery of other tests – frequent blood draws, whole-body MRI scans and ultrasounds, intestinal scans via a capsule camera, skin imaging, and so on. Most people are unlikely to have the money or time to go through quite so stringent a testing regimen, so it’s recommended that you keep track of easy-to-monitor indicators and think about your goals (plus talk to your doctor) before committing to more in-depth regular testing of any particular organ or bodily system.",
				]}
			/>
			<Section
				title={"HOW THE COMPONENTS WORK TOGETHER / INTENDED RESULTS"}
				paragraphs={[
					"The main overarching objective of the Blueprint Protocol is to slow down your personal rate of biological aging – and working toward this goal also should, by virtue of lifestyle changes, result in better overall health, improved outward appearance, and greater physical fitness. As previously mentioned, regularly monitoring and checking many bodily (plus a few environmental) indicators helps to ensure that you’re making forward progress.",
					"But the brilliance of the Blueprint Protocol really lies in how the various components interact to pursue what may seem like a more philosophical goal: what Bryan calls the autonomous self. In effect, he believes that humans can (and must) rapidly evolve by “demoting” the conscious mind and letting the body itself make more decisions without your mind needing to think about them. Consider the fact that the body already does a lot of things automatically – you effectively digest food, breathe, and blink without thinking about it. Why not let your body dictate even more of its own processes? It feels like sci-fi, but the Blueprint regimen is the first step toward this advancement of humankind.",
					"Consider the battery of tests Bryan undergoes on a regular basis. These tests tell him not just how he’s feeling overall, but rather, how plaque-free his heart is; how much oxygen his lungs can take in; how inflamed his gums are, and so on. By building such a granular set of data, Bryan is able to let these target organs “talk” and, in consultation with doctors, he can make targeted lifestyle changes to improve each organ’s function – doing exercises designed to increase lung capacity or eating veggies that aid the liver in filtering blood, for example. These proactive measures are in stark contrast to how many people approach overall wellness, hoping that some panacea or exercise will cure major, interlinked health problems. You can see how Bryan’s method embodies the concept of the autonomous self. By regularly monitoring specific indicators, your body will let you know what it needs, and you can take the appropriate steps to meet those needs. It’s a much better approach than your conscious brain (in conjunction with social media algorithms) telling you to try yoga for two weeks or Vitamin D pills for five ... leaving you wondering why you don’t feel any better afterward.",
					"Following the philosophy of Don’t Die, and aiming to let the body speak for itself, the dietary, behavioral, and exercise components of Blueprint all work together to decrease aging speed and improve health. Although it takes a high degree of commitment and an initially decent amount of conscious thought to change your diet, sleep patterns, and exercise routine, the idea is that over the following weeks and months, you’ll spend less and less time thinking about food, debating whether or not to go to bed, or deciding which day is leg day. Just as forming a good habit takes time, so does getting used to Blueprint – but once you’ve gotten in the groove, so to speak, your self will indeed become more autonomous. The use of smart watches and health apps can also cut down on how often you need to check certain health indicators, giving you even less you need to remember. By thinking about your health goals and keeping up with regular testing, and then making dietary/exercise adjustments as needed, you’ll no longer need to spend so much brain power on guessing how to make your body perform optimally. Your body will simply tell you itself!",
				]}
			/>
			<Section
				title={"PRECAUTIONS / THINGS TO THINK ABOUT"}
				paragraphs={[
					"While Blueprint can have transformative effects on your body and mind, there are some things you need to consider before heading down this path.",
					"First and foremost, it’s imperative to remember that Blueprint is a long-term, probably life-long commitment. This isn’t a fad diet or a short-term gym binge to lose weight – it is a lifestyle you must dedicate yourself to. Blueprint reinforces the idea that you can’t pick and choose which of the major components to incorporate into your life, as they all interact with and inform one another. As such, some questions you might need to ask yourself are: How will my family / social relationships be affected? (for example, you can no longer eat standard meals at restaurants, and you must stick to a strict eating and sleep schedule, potentially limiting some kinds of social interaction) Does following Blueprint align with my professional goals and work necessities? Take stock of your current day-to-day life to make sure Blueprint can be a major, driving part of it.",
					"Cost is another component to take into consideration. Bryan’s daily costs are listed in the By the Numbers section on the Blueprint Protocol website, where they can be reviewed by any curious readers. For many people, the initial kitchen setup costs and daily food/supplement spend are quite reasonable. However, the availability and cost of fresh food can differ greatly from location to location, and some vital ingredients might not be accessible at all. Supplements can also get costly depending on type. You also need to factor in the cost of a gym membership or home equipment – working out is vital to your body’s success. Last, medical tests can be a major cost consideration. Bryan ran an initial series of tests before starting to adhere to Blueprint and continues to test multiple times a year. These tests may or may not be covered by health insurance, and if not, they can get extremely expensive very quickly – but they are vital to measuring the impact of Blueprint. If you’re in a comfortable financial position, the recurring costs associated with the Blueprint Protocol may be easy to handle, but it’s also recommended to have a contingency plan in case you find yourself in a period of unemployment or underemployment.",
					"As with any lifestyle program, some standard advice applies – Bryan is not a doctor, and the information provided on the Blueprint Protocol website / in related materials is for informational purposes only; it should not be considered medical advice. Although Blueprint is envisioned as a way to lengthen your life and improve your overall well-being, it’s not intended to diagnose or treat any specific health condition. Additionally, Blueprint as a whole has not been evaluated by the FDA. Finally, some of the medicines and supplements Bryan personally takes are prescription-only, and the use of such substances should be done in consultation with your doctor.",
				]}
			/>
			<Section
				title={"HOW CAN MARKI HELP ME START MY BLUEPRINT JOURNEY?"}
				paragraphs={
					"Getting started with the Blueprint Protocol can feel overwhelming, but thankfully,  a subscription with Marki can help ease the burden of taking those first steps. Rather than scouring the supermarket for the right kinds of vegetables, buying ingredients in bulk (and hoping you use them all before they expire), or dropping $500 on a food processor, Marki will deliver your choice of Blueprint’s daily meals – giving you confidence that your body is receiving the nutrients it needs for this new lifestyle. You can also customize your meals to fit your personal taste, including adding your choice of protein to help boost those muscles! Since the goal is to cut down on time spent and decisions made on how best to optimize your longevity, let Marki take care of your meal planning – no trips to the market or prep and cooking time needed."
				}
			/>
			<Section
				title={
					"ARE THERE OTHER WAYS MARKI CAN IMPROVE MY HEALTH AND LONGEVITY?"
				}
				paragraphs={[
					"In addition to building on the Blueprint Protocol, Marki offers additional options for those who want to mix up their meal program. Each month, we’ll be adding new options based on nutritional science in addition to Blueprint. Our aim is to provide a range of choices to suit your health and longevity goals.",
					"Our core focus, though, is the development of a highly personalized nutritional program. Currently in its early stages (the Alpha stage), our solution is designed to advance nutritional programming: customizing and delivering meals based on your specific biomarkers. While Marki founders Adrien and Stephane are dedicated fans of the Blueprint Protocol, they recognize that nutritional needs vary from person to person. Women, for example, need a different balance of nutrients compared to men. Marki is developing an advanced technology solution to provide highly personalized nutritional programs based on individual needs.",
					"Our first cohort has closed – but if you’re interested in participating in our test program, sign up today to be notified when our next cohort opens. ",
				]}
			/>
			<Footer authorName="John Doe" publicationDate="11 Mar 2024" />
		</Container>
		<Recommendations />
	</main>
)

export default Article
