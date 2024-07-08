const quotes = [
  {
    key: 1,
    quote:
      'There are only 10 types of people in the world: those who understand binary, and those who don’t.',
    citation:
      "Il n'y a que 10 types de personnes dans le monde : celles qui comprennent le binaire et celles qui ne le comprennent pas.",
    author: 'Unknown',
  },
  {
    key: 2,
    quote: 'To err is human, but to really foul things up you need a computer.',
    citation:
      "L'erreur est humaine, mais pour vraiment tout gâcher, il faut un ordinateur.",
    author: 'Paul R. Ehrlich',
  },
  {
    key: 3,
    quote: 'The computer was born to solve problems that did not exist before.',
    citation:
      "L'ordinateur est né pour résoudre des problèmes qui n'existaient pas auparavant.",
    author: 'Bill Gates',
  },
  {
    key: 4,
    quote: 'I have a joke on programming, but it only works on my computer.',
    citation:
      "J'ai une blague sur la programmation, mais elle ne fonctionne que sur mon ordinateur.",
    author: 'Unknown',
  },
  {
    key: 5,
    quote:
      "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence.",
    citation:
      'Il y a deux produits majeurs qui viennent de Berkeley : le LSD et UNIX. Nous ne croyons pas que ce soit une coïncidence.',
    author: 'Jeremy S. Anderson',
  },
  {
    key: 6,
    quote: "If at first you don't succeed; call it version 1.0.",
    citation:
      'Si au début vous ne réussissez pas, appelez cela la version 1.0.',
    author: 'Unknown',
  },
  {
    key: 7,
    quote: 'In a world without walls and fences, who needs Gates and Windows?',
    citation:
      'Dans un monde sans murs ni clôtures, qui a besoin de Portes (Gates) et de Fenêtres (Windows) ?',
    author: 'Unknown',
  },
  {
    key: 8,
    quote:
      'Software and cathedrals are much the same – first we build them, then we pray.',
    citation:
      "Les logiciels et les cathédrales sont très semblables – nous les construisons d'abord, puis nous prions.",
    author: 'Sam Redwine',
  },
  {
    key: 9,
    quote: "It's not a bug – it's an undocumented feature.",
    citation: "Ce n'est pas un bug – c'est une fonctionnalité non documentée.",
    author: 'Unknown',
  },
  {
    key: 10,
    quote:
      'The only problem with troubleshooting is that sometimes trouble shoots back.',
    citation:
      'Le seul problème avec le dépannage est que parfois, les ennuis ripostent.',
    author: 'Unknown',
  },
  {
    key: 11,
    quote:
      'The Internet: where men are men, women are men, and children are FBI agents.',
    citation:
      'Internet : où les hommes sont des hommes, les femmes sont des hommes, et les enfants sont des agents du FBI.',
    author: 'Unknown',
  },
  {
    key: 12,
    quote: 'Be nice to nerds. Chances are you’ll end up working for one.',
    citation:
      "Soyez gentils avec les nerds. Il y a de fortes chances que vous finissiez par travailler pour l'un d'entre eux.",
    author: 'Bill Gates',
  },
  {
    key: 13,
    quote: 'Any fool can use a computer. Many do.',
    citation:
      "N'importe quel imbécile peut utiliser un ordinateur. Beaucoup le font.",
    author: 'Ted Nelson',
  },
  {
    key: 14,
    quote:
      'The computer is mightier than the pen, the sword, and usually, the programmer.',
    citation:
      "L'ordinateur est plus puissant que la plume, l'épée et, habituellement, le programmeur.",
    author: 'Unknown',
  },
  {
    key: 15,
    quote:
      'The great thing about Object Oriented code is that it can make small, simple problems look like large, complex ones.',
    citation:
      "Le grand avantage du code orienté objet est qu'il peut transformer de petits problèmes simples en gros problèmes complexes.",
    author: 'Unknown',
  },
  {
    key: 16,
    quote:
      'Programming is like sex. One mistake and you have to support it for the rest of your life.',
    citation:
      "La programmation, c'est comme le sexe. Une erreur et vous devez la supporter pour le reste de votre vie.",
    author: 'Michael Sinz',
  },
  {
    key: 17,
    quote:
      'Computers are good at following instructions, but not at reading your mind.',
    citation:
      'Les ordinateurs sont bons pour suivre les instructions, mais pas pour lire dans vos pensées.',
    author: 'Donald Knuth',
  },
  {
    key: 18,
    quote:
      'If you have a procedure with ten parameters, you probably missed some.',
    citation:
      'Si vous avez une procédure avec dix paramètres, vous en avez probablement oublié certains.',
    author: 'Alan Perlis',
  },
  {
    key: 19,
    quote:
      'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
    citation:
      "Je pense que Microsoft a nommé .Net pour qu'il n'apparaisse pas dans une liste de répertoires Unix.",
    author: 'Oktal',
  },
  {
    key: 20,
    quote:
      'The best performance improvement is the transition from the nonworking state to the working state.',
    citation:
      "La meilleure amélioration des performances est la transition de l'état non fonctionnel à l'état fonctionnel.",
    author: 'J. Osterhout',
  },
  {
    key: 21,
    quote:
      'Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.',
    citation:
      'Pourquoi les programmeurs confondent toujours Halloween et Noël ? Parce que Oct 31 == Dec 25.',
    author: 'Unknown',
  },
  {
    key: 22,
    quote:
      "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    citation:
      "Combien de programmeurs faut-il pour changer une ampoule ? Aucun, c'est un problème matériel.",
    author: 'Unknown',
  },
  {
    key: 23,
    quote: 'There are three kinds of lies: Lies, damned lies, and benchmarks.',
    citation:
      'Il y a trois sortes de mensonges : les mensonges, les sacrés mensonges et les benchmarks.',
    author: 'Unknown',
  },
  {
    key: 24,
    quote:
      'In order to understand recursion, one must first understand recursion.',
    citation:
      "Pour comprendre la récursivité, il faut d'abord comprendre la récursivité.",
    author: 'Unknown',
  },
  {
    key: 25,
    quote: 'Weeks of programming can save you hours of planning.',
    citation:
      'Des semaines de programmation peuvent vous faire gagner des heures de planification.',
    author: 'Unknown',
  },
  {
    key: 26,
    quote:
      'A user interface is like a joke. If you have to explain it, it’s not that good.',
    citation:
      "Une interface utilisateur est comme une blague. Si vous devez l'expliquer, ce n'est pas très bon.",
    author: 'Unknown',
  },
  {
    key: 27,
    quote:
      'A SQL query goes into a bar, walks up to two tables and asks, ‘Can I join you?’',
    citation:
      "Une requête SQL entre dans un bar, s'approche de deux tables et demande : 'Puis-je vous rejoindre ?'",
    author: 'Unknown',
  },
  {
    key: 28,
    quote:
      'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
    citation:
      'Ne vous inquiétez pas si cela ne fonctionne pas bien. Si tout fonctionnait, vous seriez au chômage.',
    author: 'Mosher’s Law of Software Engineering',
  },
  {
    key: 29,
    quote: 'It’s not a bug – it’s an undocumented feature.',
    citation: "Ce n'est pas un bug – c'est une fonctionnalité non documentée.",
    author: 'Anonymous',
  },
  {
    key: 30,
    quote:
      'I don’t care if it works on your machine! We are not shipping your machine!',
    citation:
      "Je m'en fiche si ça marche sur votre machine ! Nous n'expédions pas votre machine !",
    author: 'Vidiu Platon',
  },
  {
    key: 31,
    quote:
      'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    citation:
      "Mesurer les progrès de la programmation par les lignes de code revient à mesurer les progrès de la construction d'un avion par le poids.",
    author: 'Bill Gates',
  },
  {
    key: 32,
    quote:
      'The most disastrous thing that you can ever learn is your first programming language.',
    citation:
      'La chose la plus désastreuse que vous puissiez apprendre est votre premier langage de programmation.',
    author: 'Alan Kay',
  },
  {
    key: 33,
    quote:
      'Programming can be fun, so can cryptography; however, they should not be combined.',
    citation:
      'La programmation peut être amusante, tout comme la cryptographie ; cependant, elles ne doivent pas être combinées.',
    author: 'Kreitzberg and Shneiderman',
  },
  {
    key: 34,
    quote:
      'Walking on water and developing software from a specification are easy if both are frozen.',
    citation:
      "Marcher sur l'eau et développer un logiciel à partir d'une spécification sont faciles si les deux sont gelés.",
    author: 'Edward V. Berard',
  },
  {
    key: 35,
    quote: 'One man’s crappy software is another man’s full-time job.',
    citation:
      "Le logiciel pourri de l'un est le travail à plein temps de l'autre.",
    author: 'Jessica Gaston',
  },
  {
    key: 36,
    quote:
      'When debugging, novices insert corrective code; experts remove defective code.',
    citation:
      'Lors du débogage, les novices insèrent du code correctif ; les experts retirent le code défectueux.',
    author: 'Richard Pattis',
  },
  {
    key: 37,
    quote:
      'A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila.',
    citation:
      "Un ordinateur vous permet de faire plus d'erreurs plus rapidement que toute autre invention, à l'exception possible des pistolets et de la tequila.",
    author: 'Mitch Ratcliffe',
  },
  {
    key: 38,
    quote: 'First, solve the problem. Then, write the code.',
    citation: "D'abord, résolvez le problème. Ensuite, écrivez le code.",
    author: 'John Johnson',
  },
  {
    key: 39,
    quote: 'To iterate is human, to recurse divine.',
    citation: 'Itérer est humain, récursif est divin.',
    author: 'L. Peter Deutsch',
  },
  {
    key: 40,
    quote:
      'On two occasions, I have been asked [by members of Parliament]: ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ I am not able to rightly apprehend the kind of confusion of ideas that could provoke such a question.',
    citation:
      "À deux reprises, on m'a demandé [par des membres du Parlement] : 'Je vous en prie, M. Babbage, si vous mettez des chiffres erronés dans la machine, les bonnes réponses en sortiront-elles ?' Je ne suis pas en mesure de comprendre le genre de confusion d'idées qui pourrait provoquer une telle question.",
    author: 'Charles Babbage',
  },
  {
    key: 41,
    quote:
      'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    citation:
      "Le problème avec les programmeurs, c'est que vous ne pouvez jamais dire ce qu'un programmeur fait jusqu'à ce qu'il soit trop tard.",
    author: 'Seymour Cray',
  },
  {
    key: 42,
    quote:
      'Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.',
    citation:
      "La plupart des logiciels d'aujourd'hui ressemblent beaucoup à une pyramide égyptienne avec des millions de briques empilées les unes sur les autres, sans intégrité structurelle, mais simplement faites par la force brute et des milliers d'esclaves.",
    author: 'Alan Kay',
  },
  {
    key: 43,
    quote:
      'When a professor insists computer science is X but not Y, have compassion for his graduate students.',
    citation:
      "Quand un professeur insiste pour dire que l'informatique est X mais pas Y, ayez de la compassion pour ses étudiants diplômés.",
    author: 'Alan Perlis',
  },
  {
    key: 44,
    quote:
      'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
    citation:
      'Parfois, il vaut mieux rester au lit le lundi, plutôt que de passer le reste de la semaine à déboguer le code du lundi.',
    author: 'Dan Salomon',
  },
  {
    key: 45,
    quote: 'Any sufficiently advanced bug is indistinguishable from a feature.',
    citation:
      "Tout bug suffisamment avancé est indiscernable d'une fonctionnalité.",
    author: 'Rich Kulawiec',
  },
  {
    key: 46,
    quote:
      'Beware of bugs in the above code; I have only proved it correct, not tried it.',
    citation:
      "Attention aux bugs dans le code ci-dessus ; je l'ai seulement prouvé correct, pas essayé.",
    author: 'Donald Knuth',
  },
  {
    key: 47,
    quote:
      'The trouble with quotes on the Internet is that you can never know if they are genuine.',
    citation:
      "Le problème avec les citations sur Internet, c'est qu'on ne peut jamais savoir si elles sont authentiques.",
    author: 'Abraham Lincoln',
  },
  {
    key: 48,
    quote:
      'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    citation:
      "Le meilleur avec un booléen, c'est que même si vous avez tort, vous n'êtes décalé que d'un peu.",
    author: 'Anonymous',
  },
  {
    key: 49,
    quote:
      'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    citation:
      'Si le débogage est le processus de suppression des bogues logiciels, alors la programmation doit être le processus de leur insertion.',
    author: 'Edsger Dijkstra',
  },
  {
    key: 50,
    quote: 'Computers are like Old Testament gods; lots of rules and no mercy.',
    citation:
      "Les ordinateurs sont comme les dieux de l'Ancien Testament ; beaucoup de règles et pas de pitié.",
    author: 'Joseph Campbell',
  },
];

export default quotes;
