const sentences = [
    "Ooooh. That seems interesting. Tell me more!",
    "Joyce enjoyed eating pancakes with ketchup.",
    "It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.	It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "At that moment he wasn't listening to music, he was living an experience.",
    "The clock within this blog and the clock on my laptop are 1 hour different from each other.",
    "They ran around the corner to find that they had traveled back in time.",
    "Please put on these earmuffs because I can't you hear.",
    "All she wanted was the answer, but she had no idea how much she would hate it. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "He enjoys practicing his ballet in the bathroom.",
    "Can we go to the park .",
    "Where is the orange cat? Said the big black dog.",
    "We can make the bird fly away if we jump on something.",
    "We can go down to the store with the dog. It is not too far away.",
    "My big yellow cat ate the little black bird.",
    "I like to read my book at school.",
    "We are going to swim at the park. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "They improved dramatically once the lead singer left. ",
    "I hear that Nancy is very pretty. ",
    "Sometimes you have to just give up and win by cheating.",
    "Blue sounded too cold at the time and yet it seemed to work for gin.",
    "The green tea and avocado smoothie turned out exactly as would be expected.",
    "In that instant, everything changed. ",
    "I currently have 4 windows open up… and I don’t know why.",
    "Gary didn't understand why Doug went upstairs to get one dollar bills when he invited him to go cow tipping.",
    "The shark-infested South Pine channel was the only way in or out.",
    "When he asked her favorite number, she answered without hesitation that it was diamonds.",
    "She insisted that cleaning out your closet was the key to good driving.",
    "He invested some skill points in Charisma and Strength. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
    "Cats are good pets, for they are clean and are not noisy.",
    "It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
    "There are over 500 starfish in the bathroom drawer.",
    "The murder hornet was disappointed by the preconceived ideas people had of him.",
    "It's not often you find a soggy banana on the street.",
    "The Japanese yen for commerce is still well-known.",
    "Shakespeare was a famous 17th-century diesel mechanic. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "He decided to live his life by the big beats manifesto.",
    "The bees decided to have a mutiny against their queen.",
    "His confidence would have bee admirable if it wasn't for his stupidity. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "He strives to keep the best lawn in the neighborhood.",
    "Carol drank the blood as if she were a vampire.",
    "Dan ate the clouds like cotton candy.",
    "He went on a whiskey diet and immediately lost three days.",
    "That is an appealing treasure map that I can't read. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
    "Henry couldn't decide if he was an auto mechanic or a priest.",
    "The small white buoys marked the location of hundreds of crab pots.",
    "Don't step on the broken glass.",
    "Her scream silenced the rowdy teenagers.",
];

const USERS = [
    {
        id: 1,
        name: "Emeka Momodu",
        sentences: [
            "Brevity is the soul of wit",
            "Sleep if for the weak",
            "Pretty much",
            "hmm hmm",
            "Mad mad",
            "Word Word",
            "A minute's success pays the failure of years.",
            "Before I got married I had six theories about bringing up children; now I have six children and no theories.",
            "The movies are the only business where you can go out front and applaud yourself.",
            "Humor is our way of defending ourselves from life's absurdities by thinking absurdly about them.",
            "Think like a wise man but communicate in the language of the people.",
            "Dreams are postcards from our subconscious, inner self to outer self, right brain trying to cross that moat to the left. Too often they come back unread: \"return to sender, addressee unknown.\" That's a shame because it's a whole other world out there--or in here depending on your point of view.",
            "I belong to no organized party. I am a Democrat.",
            "Besides the noble art of getting things done, there is a nobler art of leaving things undone. The wisdom of life consists in the elimination of nonessentials.",
            "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
            "Never fear the want of business. A man who qualifies himself well for his calling, never fails of employment.",
            "I only know two pieces; one is 'Clair de Lune' and the other one isn't.",
            "Imagination is the one weapon in the war against reality.",
            "That you may retain your self-respect, it is better to displease the people by doing what you know is right, than to temporarily please them by doing what you know is wrong.",
            "When you come to a fork in the road, take it.",
            "Those who believe in telekinetics, raise my hand",
            "A child becomes an adult when he realizes that he has a right not only to be right but also to be wrong.",
            "Every time you state what you want or believe, you're the first to hear it. It's a message to both you and others about what you think is possible. Don't put a ceiling on yourself.",
            "The great thing in this world is not so much where you stand, as in what direction you are moving."
        ]
    },
    {
        id: 2,
        name: "Harry Potter",
        sentences: [
            "Everyone thinks I'm special ... All those people in the Leaky Cauldron, Professor Quirrell, Mr. Ollivander ... But I don't know anything about magic at all.",
            "You're worth twelve of Malfoy. The Sorting Hat chose you for Gryffindor, didn't it? And where's Malfoy? In stinking Slytherin.",
            "The poor toilet's never had anything as horrible as your head down it—it might be sick.",
            "You've forgotten the magic word.",
            "I don't want to be rude or anything, but—this isn't a great time for me to have a house elf in my bedroom.",
            "And I thought I had it bad staying here for another four weeks,",
            "This makes the Dursleys sound almost human. Can't anyone help you? Can't I?",
            "Proud? Are you crazy? All those times I could have died and didn't manage it? They'll be furious ... ",
            "Yeah, you can have a word. Goodbye.",
            "I don't know who Maxime thinks she's kidding. If Hagrid's half-giant, she definitely is. Big bones ... the only things that's got bigger bones than her is a dinosaur.",
            "We could all do with a few laughs. I've got a feeling we're going to need them more than usual before long.",
            "Why do they have to move in packs? How're you supposed to get one on their own to ask them?",
            "My eyes aren't glistening with the ghosts of my past!",
            "Not as stupid as you look, are you, Dud? But I s'pose, if you were, you wouldn't be able to walk and talk at the same time.",
            "Wow, I wonder what it'd be like to have a difficult life?",
            "Quirrell was a great teacher, there was just that minor drawback of him having Lord Voldemort sticking out of the back of his head.",
            "Did he say you look like a pig that's been taught to walk on its hind legs? 'Cause that's not cheek, Dud, that's true.",
            "This is night, Diddykins. That's what we call it when it goes all dark like this.",
            "Hermione, you're good on feelings and stuff, but you just don't understand about Quidditch.",
            "You're the one who is weak. You will never know love or friendship. And I feel sorry for you.",
            "What d'you mean I'm not brave in bed?",
            "His priority did not seem to be to teach them what he knew, but rather to impress upon them that nothing, not even ... knowledge, was foolproof.",
            "So that's it, is it? Stay there? That's all anyone could tell me after I got attacked by those dementors too! Just stay put while the grown-ups sort it out, Harry! We won't bother telling you anything, though, because your tiny little brain might not be able to cope with it!",
            "Does anyone really know what You-Know-Who would or wouldn't do?",
            "One of the only honest things you've said to me. You don't care whether I live or die, but you do care that I help you convince everyone you're winning the war against Voldemort.",
            "He will only be gone from the school when none here are loyal to him.",
            "There's no need to call me 'sir,' Professor.",
            "Be brave, Professor. Be brave like my mother ... Otherwise, you disgrace her. Otherwise, she died for nothing. Otherwise, the bowl will remain empty ... forever.",
            "Dudley, for the first time in your life, you're talking sense.",
            "I won't blast people out of my way just because they're there. That's Voldemort's job.",
            "Severus Snape wasn't yours. Snape was Dumbledore's, Dumbledore's from the moment you started hunting down my mother. And you never realised it, because of the thing you can't understand. You never saw Snape cast a Patronus, did you, Riddle?",
            "Are you out of your mind?. A plot to get this house? Are you actually as stupid as you look?",
            "Albus Severus, you were named for two headmasters of Hogwarts. One of them was a Slytherin and he was probably the bravest man I ever knew.",
            "Yeah,and she's seeing someone. Jealous type. Big bloke. You wouldn't want to cross him."
        ]
    },
    {
        id: 3,
        name: "Albus Dumbledore",
        sentences: [
            "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.",
            "It does not do to dwell on dreams and forget to live.",
            "People find it far easier to forgive others for being wrong than being right.",
            "It is my belief that the truth is generally preferable to lies.",
            "While we may come from different places and speak in different tongues, our hearts beat as one.",
            "Numbing the pain for a while will make it worse when you finally feel it.",
            "Curiosity is not a sin, but we should exercise caution with our curiosity.",
            "I sometimes find, and I am sure you know the feeling, that I simply have too many thoughts and memories crammed into my mind.",
            "It matters not what someone is born, but what they grow to be.",
            "The truth: It is a beautiful and terrible thing, and should therefore be treated with caution.",
            "Youth can not know how age thinks and feels, but old men are guilty if they forget what it is to be young.",
            "It is the unknown we fear when we look upon death and darkness. Nothing more.",
            "To the well-organized mind, death is but the next great adventure.",
            "Where your treasure is, there your heart will be also.",
            "It is our choices, Harry, that show what we truly are, far more than our abilities.",
            "Perhaps those who are best suited to power are those who have never sought it.",
            "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
            "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
            "It is important to fight and fight again, and keep fighting, for only then can evil be kept at bay though never quite eradicated.",
            "The best of us sometimes eat our words.",
            "We must all face the choice between what is right, and what is easy.",
            "One can never have enough socks.",
            "Killing is not so easy as the innocent believe.",
            "Do not pity the dead, Harry. Pity the living and above all, those who live without love.",
            "You think the dead we loved truly ever leave us? You think we don't recall them more clearly in times of great trouble?",
            "We are only as strong as we are united, as weak as we are divided.",
            "As much money and life as you could want! The two things most human beings would choose above all — the trouble is, humans do have a knack of choosing precisely those things that are worst for them.",
            "Have you any idea how much tyrants fear the people they oppress? All of them realize that one day, amongst their many victims, there is sure to be one that rises against them and strikes back!",
            "Let us step out into the night and pursue that flighty temptress, adventure.",
            "We must try not to sink beneath our anguish ... but battle on.",
            "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
            "For in dreams we enter a world that is entirely our own. Let them swim in the deepest ocean or glide over the highest cloud.",
            "This pain is part of being human. The fact that you can feel pain like this is your greatest strength.",
            "Music, a magic beyond all we do here!",
            "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."
        ]
    },
    {
        id: 4,
        name: "Hermione Granger",
        sentences: [
            "Books! And cleverness! There are more important things! — Friendship! And Bravery!",
            "It means 'dirty blood.' Mudblood’s a foul name for someone who’s Muggle-born. Someone with non-magic parents. Someone like me. It’s not a term one usually hears in civilized conversation.",
            "One person can’t feel all that at once, they’d explode.",
            "It would be quite nice if you stopped jumping down out throats, Harry, because in case you haven’t noticed, Ron and I are on your side.",
            "A warmth was spreading through him that had nothing to do with the sunlight; a tight obstruction in his chest seemed to be dissolving. He knew that Ron and Hermione were more shocked than they were letting on, but the mere fact that they were still there on either side of him, speaking bracing words of comfort, not shrinking from him as though he were contaminated or dangerous, was worth more than he could ever tell them.",
            "That is the second time you have spoken out of turn, Miss Granger, Five more points from Gryffindor for being an insufferable know-it-all.",
            "I mean, it’s sort of exciting isn’t it? Breaking the rules.",
            "Fear of a name only increases fear of the thing itself.",
            "I’m hoping to do some good in the world!",
            "I mean, you could claim that anything’s real if the only basis for believing in it is that nobody’s proved it doesn’t exist!",
            "Just because you have the emotional range of a teaspoon doesn’t mean we all have!",
            "Next time there’s a ball, ask me before someone else does, and not as a last resort!",
            "Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl!",
            "Actually I’m highly logical which allows me to look past extraneous detail and perceive clearly that which others overlook.",
            "You know, the Egyptians used to worship cats.",
            "I checked this out weeks ago for a bit of light reading.",
            "Very well spotted.",
            "No, Harry. Even in the wizarding world, hearing voices isn’t a good sign.",
            "Now if you two don’t mind, I’m going to bed before either of you come up with another clever idea to get us killed - or worse, expelled.",
            "Are you sure that’s a real spell? Well, it’s not very good, is it?",
            "Are you planning to follow a career in Magical Law, Miss Granger?",
            "No, I’m not, I’m hoping to do some good in the world!",
            "What’s got your wand in a knot?",
            "Stop, stop, stop! You’re going to take someone’s eye out. Besides, you’re saying it wrong. It’s leviosa, not leviosar!",
            "Always the tone of surprise.",
            "Honestly, don’t you two read?",
            "Run like you have to get to the library.",
            "Ooh, you look much tastier than Crabbe and Goyle, Harry. oh you know what I mean - Goyle’s Potion looked like bogies.",
            "Did you see me disarm Hermione, Harry?",
            "Only once I got you loads more then you got me—",
            "I did not only get you once, I got you at least three times—",
            "Well if you’re counting the one where you tripped over your own feet and knocked the wand out of my hand—",
            "Honestly, you should take Muggle Studies next year...",
            "But from that moment on, Hermione Granger became their friend. Because there are somethings you can’t go through in life and become friends, and knocking out a twelve-foot mountain troll is one of them.",
            "Oh, yeah, I borrowed it for a bit of bedtime reading,",
            "Shh! Listen! Someone’s coming! I think — I think it might be us!",
            "Sometimes friendship means not having to say anything. Thank yous and apologies can sometimes get lost, but that doesn’t mean they’re unexpressed,",
            "Ultimately, she had a bigger heart than she had a brain, and that’s saying something for Hermione.",
            "You’re the cleverest witch I’ve ever met Hermione.",
            "At least no one on the Gryffindor team had to buy their way in, They got in on pure talent.",
            "Oh I see, so basically, you’re going to take the best-looking girl who’ll have you, even if she’s completely horrible?",
            "Oh for heaven’s sake! Listen to me, all of you! You’ve got just as much right as wizards to be unhappy! You’ve got the right to wages and holidays and proper clothes, you don’t have to do everything you’re told — look at Dobby!",
            "No, Harry, you listen,’ said Hermione. ‘We’re coming with you. That was decided months ago — years, really.‘",
            "The idea of a teenage Dumbledore was simply odd, like trying to imagine a stupid Hermione or a friendly Blast-Ended Skrewt."
        ]
    },
    {
        id: 5,
        name: "Ron Weasley",
        sentences: [
            "Lockhart’ll sign anything if it stands still long enough.",
            "There’s a time and a place for getting a smart mouth.",
            "If you want to kill Harry, you’ll have to kill us too!",
            "Maybe he murdered Myrtle; that would’ve done everyone a favor…",
            "IF WE DIE FOR THEM, I’LL KILL YOU, HARRY!",
            "They didn’t look anything like hats to me, more like woolly bladders.",
            "It’s the only way… I’ve got to be taken.",
            "If he doesn’t stop trying to save your life he’s going to kill you.",
            "We’re with you whatever happens.",
            "I’d hate to see what the Ministry’d do to me if I blew up an aunt. Mind you, they’d have to dig me up first, because Mum would’ve killed me.",
            "One person can’t feel all that at once, they’d explode.",
            "Yeah, I’ve seen those things they think are gnomes, like fat little Santa Clauses with fishing rods…",
            "Can I have a look at Uranus too, Lavender?",
            "It’s a damn sight harder making stuff up when you’re under stress than you’d think.",
            "And Neville will play Quidditch for England before Hagrid lets Dumbledore down.",
            "Can you believe our luck? Of all the trees we could’ve hit, we had to get one that hits back.",
            "Harry, you’ve got to come and stay with us. I’ll fix it up with Mum and Dad, then I’ll call you. I know how to use a fellytone now.",
            "I mean we should tell them to get out. We don’t want any more Dobbies, do we? We can’t order them to die for us —",
            "Mum, d’you honestly think You-Know-Who’s going to be hiding behind a bookshelf in Flourish and Blotts?",
            "Percy wouldn’t recognize a joke if it danced naked in front of him wearing Dobby’s tea cozy.",
            "If you’re not in Gryffindor, we’ll disinherit you, but no pressure.",
            "Don’t let the Muggles get you down!",
            "Poisonous toadstools don’t change their spots.",

        ]
    },
    {
        id: 6,
        name: "Rubeus Hagrid",
        sentences: [
            "Ah, go boil yer heads, both of yeh. Harry—yer a wizard.",
            "Everyone starts at the beginning at Hogwarts, you'll be just fine. Just be yerself. I know it's hard. Yeh've been singled out, an' that's always hard. But yeh'll have a great time at Hogwarts — I did — still do, 'smatter of fact.",
            "Yeh know wha’ Harry? when I firs’ met you, you reminded me o’ me a bit.",
            "It's changing out there. Just like last time. There's a storm coming, Harry. And we all best be ready.",
            "Well, Just Harry, did you ever make anything happen? Anything you couldn't explain, when you were angry or scared?",
            "If that dolt of a cousin of yours, Dudley, gives you any grief...you could always...threaten him... with a nice pair of ears to go with that tail of his.",
            "Well, yeh might’ve bent a few rules, Harry, bu’ yeh’re all righ’ really, aren’ you?",
            "If anyone wanted ter find out some stuff, all they’d have ter do would be ter follow the spiders. That’d lead ‘em right! That’s all I’m sayin’.",
            "A mark like that only comes from being touched by a curse, and an evil curse at that.",
            "You all righ'? Yeah, No, yeh're not, 'Course yeh're not. But yeh will be.",
            "Listen to me, all three of ya: Yer meddlin’ in things that aught not to be meddled in; it’s too dangerous. What that dog is guarding is strictly between Professor Dumbledore and Nicholas Flamel.",
            "Dumbledore sent me to parley with the giants…I tried to convince them to join the cause. But I wasn’t the only one that was trying to win them over.",
            "I gotta tell yeh, I thought you two’d value yer friend more’n broomsticks or rats. That’s all.",
            "Mad and hairy? You wouldn’t be talkin’ about me, now would ya?",
            "Better out than in",
            "Tiny little bloke, my dad was. By the time I was six I could lift him up an’ put him on top o’ the dresser if he annoyed me. Used ter make him laugh.",
            "Ah, well, people can be stupid abou’ their pets,",
            "Great man, Dumbledore. ‘S long as we’ve got him, I’m not too worried.",
            "Look! He Knows His Mummy! Hello, Norbert!",
            "He’ll accept anyone at Hogwarts, s’long as they’ve got the talent. Knows people can turn out okay even if their families weren’ . . .well . . . all tha’ respectable.",
            "They were all bullyin’ him, Hermione, ’cause he’s so small!’ said Hagrid.",
            "I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.’ An’ he was right.",
            "What’s comin’ will come, an’ we’ll meet it when it does.",
            "It's changing out there. Just like last time. There's a storm coming, Harry. We'd all best be ready when she does.",
            "Not All Wizards Are Good. Some of them go bad.",
            "Never, try an' get a straight answer out of a centaur. Ruddy stargazers. Not interested in anythin' closer'n the moon.",
            "Snape?’ ‘Yeah – yer not still on abou’ that, are yeh? Look, Snape helped protect the Stone, he’s not about ter steal it."
        ]
    },
    {
        id: 7,
        name: "Severus Snape",
        sentences: [
            "The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is unfixed, mutating, indestructible.",
            "Tut, tut — fame clearly isn’t everything.",
            "There is no need to call me ‘sir’, Professor.",
            "Always",
            "That is just as well, Potter,” said Snape coldly, “because you are neither special nor important, and it is not up to you to find out what the Dark Lord is saying to his Death Eaters.” “No — that’s your job, isn’t it?” Harry shot at him. He had not meant to say it; it had burst out of him in temper. For a long moment they stared at each other, Harry convinced he had gone too far. But there was a curious, almost satisfied expression on Snape’s face when he answered. “Yes, Potter,” he said, his eyes glinting. “That is my job.",
            "Well, it may have escaped your notice, but life isn’t fair.",
            "You are here to learn the subtle science and exact art of potion-making. As there is little foolish wand-waving here, many of you will hardly believe this is magic. I don’t expect you will really understand the beauty of the softly simmering cauldron with its shimmering fumes, the delicate power of liquids that creep through human veins, bewitching the mind, ensnaring the senses. . . I can teach you how to bottle fame, brew glory, even stopper death — if you aren’t as big a bunch of dunderheads as I usually have to teach.",
            "Albus Severus,” Harry said quietly, so that nobody but Ginny could hear, and she was tactful enough to pretend to be waving to Rose, who was now on the train, “you were named for two headmasters of Hogwarts. One of them was a Slytherin and he was probably the bravest man I ever knew.",
            "Then you will find yourself easy prey for the Dark Lord! Fools who wear their hearts proudly on their sleeves, who cannot control their emotions, who wallow in sad memories and allow themselves to be provoked this easily — weak people, in other words — they stand no chance against his powers! He will penetrate your mind with absurd ease, Potter!",
            "Mr. Moony presents his compliments to Professor Snape, and begs him to keep his abnormally large nose out of other people’s business.",
            "Mr. Prongs agrees with Mr. Moony, and would like to add that Professor Snape is an ugly git.",
            "Mr. Padfoot would like to register his astonishment that an idiot like that ever became a professor.",
            "Mr. Wormtail bids Professor Snape good day, and advises him to wash his hair, the slimeball.",
            "Yes, it is easy to see that nearly six years of magical education have not been wasted on you, Potter. Ghosts are transparent.",
            "Ah, yes,” he said softly, “Harry Potter. Our new — celebrity.",
            "That is the second time you have spoken out of turn, Miss Granger,” said Snape coolly. “Five more points from Gryffindor for being an insufferable know-it-all.",
            "Hermione went very red, put down her hand, and stared at the floor with her eyes full of tears. It was a mark of how much the class loathed Snape that they were all glaring at him, because every one of them had called Hermione a know-it-all at least once, and Ron, who told Hermione she was a know-it-all at least twice a week, said loudly, “You asked us a question and she knows the answer! Why ask if you don’t want to be told?”",
            "Kill me then,” panted Harry, who felt no fear at all, but only rage and contempt. “Kill me like you killed him, you coward —",
            "Her son lives. He has her eyes, precisely her eyes. You remember the shape and color of Lily Evans’s eyes, I am sure?",
            "DON’T!” bellowed Snape. “Gone… dead…",
            "Is this remorse, Severus?",
            "I wish… I wish I were dead…",
            "And what use would that be to anyone?” said Dumbledore coldly",
            "There was a long pause, and slowly Snape regained control of himself, mastered his own breathing. At last he said, ‘Very well. Very well. But never – never tell, Dumbledore! This must be between us! Swear it! I cannot bear… especially Potter’s son… I want your word!’",
            "My word, Severus, that I shall never reveal the best of you?’ Dumbledore sighed, looking down into Snape’s ferocious, anguished face. ‘If you insist …",
            "I have spied for you and lied for you, put myself in mortal danger for you. Everything was supposed to be to keep Lily Potter’s son safe. Now you tell me you have been raising him like a pig for slaughter —",
            "The mind is not a book, to be opened at will and examined at leisure.",
            "Would you like me to do it now?” asked Snape, his voice heavy with irony. “Or would you like a few moments to compose an epitaph?",
            "But somebody else had spoken Snape’s name, quite softly",
            "The sound frightened Harry beyond anything he had experienced all evening. For the first time, Dumbledore was pleading.",
            "Severus . . .",
            "Snape gazed for a moment at Dumbledore, and there was revulsion and hatred etched in the harsh lines of his face.",
            "Severus . . . please . . .",
            "Snape raised his wand and pointed it directly at Dumbledore.",
            "Avada Kedavra!",
            "A jet of green light shot from the end of Snape’s wand and hit Dumbledore squarely in the chest. Harry’s scream of horror never left him; silent and unmoving, he was forced to watch as Dumbledore was blasted into the air. For a split second, he seemed to hang suspended beneath the shining skull, and then he fell slowly backward, like a great rag doll, over the battlements and out of sight.”",

        ]
    },
    {
        id: 8,
        name: "Lord Voldemort",
        sentences: [
            "Surely you didn’t think I was going to keep my filthy Muggle father’s name? No. I fashioned myself a new name, a name I knew wizards everywhere would one day fear to speak, when I became the greatest sorcerer in the world!",
            "My mother died just after I was born, sir. They told me at the orphanage she lived just long enough to name me - Tom after my father, Marvolo after my grandfather.",
            "I can make things move without touching them. I can make animals do what I want them to do without training them. I can make bad things happen to people who annoy me. I can make them hurt if I want.",
            "Voldemort is my past, present, and future.",
            "Harry Potter, the Boy who Lived... come to die. Avada Kedavra!",
            "Invite him inside, Wormtail. Where are your manners?",
            "There is no good and evil, there is only power and those too weak to seek it.",
            "Welcome, my friends. Thirteen years it's been, and yet, here you stand before me, as though it were only yesterday. I confess myself... disappointed. Not one of you tried to find me.",
            "But I was willing to embrace mortal life again, before chasing immortality.",
            "I’m going to kill you, Harry Potter. I’m going to destroy you. After tonight, no one will ever again question my power. After tonight if they speak of you, they’ll only speak of how you begged for death. And how I being a merciful Lord… obliged.",
            "You’re a fool, Harry Potter, and you will lose everything.",
            "I have seen your heart and it's mine. I have seen your dreams, Ronald Weasley, and I have seen your fears...",
            "How is it that you - a skinny boy with no extraordinary magical talent - managed to defeat the greatest wizard of all time? How did you escape with nothing but a scar, while Lord Voldemort's powers were destroyed?",
            "The Boy who Lived. How lies have fed your legend, Harry! Shall I reveal what really happened that night thirteen years ago? Shall I divulge how I truly lost my powers? [Whispers] Yes, shall I?",
            "I was ripped from my body, I was less than spirit, less than the meanest ghost... but still, I was alive.",
            "Don't you turn your back on me, Harry Potter! I want you to look at me when I kill you! I want to see the light leave your eyes!",
            "The boy has discovered our secret, Nagini. It makes us vulnerable. We must deploy all our forces now to find him. And you, my friend, must stay close.",
            "Give me Harry Potter. Do this and none shall be harmed. Give me Harry Potter, and I shall leave Hogwarts untouched. Give me Harry Potter, and you will be rewarded. You have one hour.",
            "Harry. Ah, I'd almost forgotten you were here. Standing on the bones of my father. I'd introduce you but word has it you're almost as famous as me these days.",
            "Every drop of magical blood spilled is a terrible waste.",
            "Come out, Harry... come out and play, then it will be quick it might even be painless I would not know I have never died.",
            "We are joined tonight by Ms. Charity Burbage, who until recently taught at Hogwarts School of Witchcraft and Wizardry. Her specialty was Muggle Studies. It is Ms. Burbage's belief that Muggles are not so different from us... To her, the mixture of magical and Muggle blood is not an abomination, but something to be encouraged.",
            "As inspiring as I find your bloodlust, Bellatrix, I must be the one to kill Harry Potter.",
            "Pick up your wand, Potter! You've been taught how to duel, I presume. First, we bow to each other... Dumbledore wouldn't want you to forget your manners, would he?",
            "And here we have six missing Death Eaters... three dead in my service. One, too cowardly to return... he will pay. One, who I believe has left me for ever... he will be killed, of course... and one who remains my most faithful servant, and who has already re-entered my service.”"
        ]
    }
]

module.exports = {sentences, USERS};
