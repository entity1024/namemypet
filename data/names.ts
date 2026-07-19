import { PetType, Gender, StyleType, NameEntry } from "@/types";

const NAMES_DB: Record<
  PetType,
  Record<Gender, Partial<Record<StyleType, NameEntry[]>>>
> = {
  Dog: {
    Male: {
      Classic: [
        { name: "Rufus", description: "A faithful name with timeless charm" },
        { name: "Barney", description: "Steadfast and true, a classic choice" },
        { name: "Samson", description: "Strong and dependable through the years" },
        { name: "Chester", description: "Warm-hearted with a vintage feel" },
        { name: "Hugo", description: "Solid and noble, never goes out of style" },
        { name: "Milo", description: "Gentle soul with an old-world grace" },
      ],
      Cute: [
        { name: "Wiggles", description: "For a pup whose tail never stops" },
        { name: "Niblet", description: "Tiny, sweet, and impossible to resist" },
        { name: "Pip", description: "Small but bursting with personality" },
        { name: "Biscuit", description: "Golden and adored by everyone" },
        { name: "Sprout", description: "Little buddy growing into a big heart" },
        { name: "Dot", description: "Tiny speck of pure joy" },
      ],
      Funny: [
        { name: "Sir Barksalot", description: "He has opinions and shares them loudly" },
        { name: "Waffles", description: "Deliciously silly and always up for fun" },
        { name: "Pickle", description: "In a bit of a briny situation" },
        { name: "Boomer", description: "The goofiest goof to ever goof" },
        { name: "Noodle", description: "Flops around like an overcooked pasta" },
        { name: "Gizmo", description: "Chaotic little inventor of trouble" },
      ],
      Strong: [
        { name: "Titan", description: "A towering presence of raw strength" },
        { name: "Kodiak", description: "Bear-like power wrapped in fur" },
        { name: "Odin", description: "All-father of courage and might" },
        { name: "Brutus", description: "Unbreakable spirit and iron will" },
        { name: "Colossus", description: "Massive in both size and heart" },
        { name: "Ragnar", description: "Viking soul with a warrior's resolve" },
      ],
      Royal: [
        { name: "Kingston", description: "Regal bearing from paw to crown" },
        { name: "Regis", description: "Latin for king, and he knows it" },
        { name: "Duke", description: "Nobility runs through his veins" },
        { name: "Sultan", description: "Commanding respect wherever he goes" },
        { name: "Prince", description: "Heir to the throne of your heart" },
        { name: "Baron", description: "Territorial with a dignified air" },
      ],
      Geek: [
        { name: "Frodo", description: "Carrying the leash to Mordor and back" },
        { name: "Pixel", description: "Every good boy is made of pixels" },
        { name: "Navi", description: "Hey! Listen! Walk me!" },
        { name: "Groot", description: "Guardian of the living room" },
        { name: "Data", description: "Fully functional and programmed to play" },
        { name: "Spock", description: "Fascinating. The treat is logical." },
        { name: "Mario", description: "It's a-me, walk time!" },
      ],
    },
    Female: {
      Classic: [
        { name: "Daisy", description: "Fresh and lovely like a spring flower" },
        { name: "Molly", description: "A cheerful heart in a fuzzy body" },
        { name: "Abby", description: "Gentle and loyal through every season" },
        { name: "Rosie", description: "Blossoms with affection and grace" },
        { name: "Sadie", description: "Calm elegance with a hint of mischief" },
        { name: "Penny", description: "Lucky charm on four paws" },
      ],
      Cute: [
        { name: "Pepper", description: "Zesty little spiceball of energy" },
        { name: "Mochi", description: "Soft, sweet, and utterly addictive" },
        { name: "Tinker", description: "Tiny paws, giant imagination" },
        { name: "Pippin", description: "Ripe for adventure and cuddles" },
        { name: "Cocoa", description: "Warm and rich like your morning cup" },
        { name: "Buttons", description: "Cute enough to button up your heart" },
      ],
      Elegant: [
        { name: "Aurora", description: "Dawn-light beauty in every step" },
        { name: "Celeste", description: "Heavenly grace in fur form" },
        { name: "Ophelia", description: "Poetry in motion, delicate and deep" },
        { name: "Genevieve", description: "Refined elegance from a bygone era" },
        { name: "Seraphina", description: "Angelic presence with a fiery heart" },
        { name: "Vivian", description: "Lively grace with a gentle soul" },
      ],
      Nature: [
        { name: "Willow", description: "Bends with the wind but never breaks" },
        { name: "Fern", description: "Quiet beauty thriving in the shade" },
        { name: "Hazel", description: "Warm eyes like autumn woods" },
        { name: "Clover", description: "Lucky charm growing wild and free" },
        { name: "Iris", description: "A rainbow of color in the garden" },
        { name: "Maple", description: "Sweet sap and vibrant fall leaves" },
      ],
      "Food Inspired": [
        { name: "Olive", description: "Savory charm with a touch of brine" },
        { name: "Honey", description: "Sticky-sweet and golden" },
        { name: "Toffee", description: "Rich, buttery, and hard to resist" },
        { name: "Saffron", description: "Exquisite and precious spice of life" },
        { name: "Ginger", description: "Spicy attitude warming your home" },
        { name: "Maple", description: "Pancake mornings and autumn walks" },
      ],
    },
    Either: {},
  },
  Cat: {
    Male: {
      Classic: [
        { name: "Jasper", description: "A distinguished gentleman of the house" },
        { name: "Oliver", description: "Twist and turn, always landing on his feet" },
        { name: "Simon", description: "Quiet wisdom behind those knowing eyes" },
        { name: "Theo", description: "Cool as a cucumber, soft as a cloud" },
        { name: "Finn", description: "Adventurous spirit in a compact frame" },
        { name: "Oscar", description: "Grumpy exterior, marshmallow interior" },
      ],
      Funny: [
        { name: "Chairman Meow", description: "Presiding over the kingdom of naps" },
        { name: "Catrick Swayze", description: "Nobody puts kitty in a corner" },
        { name: "Furrnando", description: "Telenovela drama in every whisker" },
        { name: "Meowton", description: "Physics of falling objects expert" },
        { name: "Clawdia", description: "Don't let the name fool you, he's male" },
        { name: "Al Pacino", description: "Hoo-ah! The treat must be delivered" },
      ],
      Mythological: [
        { name: "Anubis", description: "Guide of souls, guardian of the threshold" },
        { name: "Loki", description: "Trickster god of shedding and chaos" },
        { name: "Bastian", description: "Son of Bastet, keeper of the home" },
        { name: "Thor", description: "God of thunder, scared of cucumbers" },
        { name: "Apollo", description: "Sun deity demanding worship via kibble" },
        { name: "Hermes", description: "Swift messenger of the snack cabinet" },
      ],
      Fantasy: [
        { name: "Gandalf", description: "You shall not pass without treats" },
        { name: "Merlin", description: "Ancient magic in every purr" },
        { name: "Dumbledore", description: "Headmaster of the House of Cat" },
        { name: "Zephyr", description: "West wind carrying whispers of adventure" },
        { name: "Elrond", description: "Half-elf, half-cat, fully majestic" },
        { name: "Radagast", description: "Brown wizard friend of all creatures" },
      ],
      Playful: [
        { name: "Ziggy", description: "Zigging and zagging through the curtains" },
        { name: "Rascal", description: "Trouble is his middle name" },
        { name: "Taz", description: "Devilish whirlwind of fur and fun" },
        { name: "Bounce", description: "Spring-loaded paws, infinite energy" },
        { name: "Jester", description: "Court fool with impeccable comedic timing" },
        { name: "Scooter", description: "Zoomies champion seven years running" },
      ],
    },
    Female: {
      Cute: [
        { name: "Misty", description: "Soft as morning fog on the window" },
        { name: "Lily", description: "Delicate bloom with hidden thorns" },
        { name: "Peaches", description: "Velvety fur, sweet disposition" },
        { name: "Pudding", description: "Wobbly, jiggly, lovable mess" },
        { name: "Snickers", description: "Fun-sized bundle of purrs" },
        { name: "Tinkerbell", description: "Sprinkling catnip magic everywhere" },
      ],
      Elegant: [
        { name: "Luna", description: "Moonlit grace in every silent step" },
        { name: "Stella", description: "Star shining bright in the night" },
        { name: "Isis", description: "Ancient grace wrapped in modern fur" },
        { name: "Margot", description: "Old Hollywood glamour in whiskers" },
        { name: "Cosima", description: "Order and beauty in perfect harmony" },
        { name: "Anastasia", description: "Royalty reborn in feline form" },
      ],
      Nature: [
        { name: "Ivy", description: "Clings gently but grows stronger each day" },
        { name: "Lark", description: "Morning song in feline form" },
        { name: "Primrose", description: "First bloom of spring in your lap" },
        { name: "Thistle", description: "Tough beauty thriving in wild places" },
        { name: "Wren", description: "Small but mighty song of the forest" },
        { name: "Meadow", description: "Endless fields of calm and peace" },
      ],
      Royal: [
        { name: "Duchess", description: "Nobility demands the finest cushions" },
        { name: "Empress", description: "All she surveys is her domain" },
        { name: "Cleo", description: "Pharaoh's daughter ruling the Nile" },
        { name: "Titania", description: "Queen of the fairies, queen of the house" },
        { name: "Sultana", description: "Majesty draped in silk and fur" },
        { name: "Maharani", description: "Indian princess with a imperial purr" },
      ],
    },
    Either: {},
  },
  Rabbit: {
    Either: {
      Cute: [
        { name: "Velvet", description: "Plush as a bunny should be" },
        { name: "Puff", description: "A cotton ball with legs" },
        { name: "Cinnamon", description: "Sweet and warm like a fresh roll" },
        { name: "Nibbles", description: "Gentle nibbler of carrot tops" },
        { name: "Flopsy", description: "Flop-eared champion of naps" },
        { name: "Marshmallow", description: "Toasty golden outside, soft inside" },
      ],
      Nature: [
        { name: "Clover", description: "Hopping through meadows of luck" },
        { name: "Briar", description: "Wild and free among the thickets" },
        { name: "Dandelion", description: "Blows in the wind, never tethered" },
        { name: "Moss", description: "Soft and green, at home in the woods" },
        { name: "Thyme", description: "Tiny herb with a giant personality" },
        { name: "Sorrel", description: "Tangy wild leaf always on the move" },
      ],
      Playful: [
        { name: "Binky", description: "Master of the happy mid-air twist" },
        { name: "Scamper", description: "Racing circles around bedtime" },
        { name: "Zippy", description: "Lightning hops, zero chill" },
        { name: "Jitterbug", description: "Dancing through the day on springy legs" },
        { name: "Whisk", description: "Beats eggs and bunnies in a dash" },
        { name: "Frisky", description: "Perpetual zoomies in a fluffy package" },
      ],
    },
    Male: {},
    Female: {},
  },
  Bird: {
    Either: {
      Classic: [
        { name: "Mango", description: "Tropical splash of color and song" },
        { name: "Kiwi", description: "Small, green, and uniquely wonderful" },
        { name: "Sunny", description: "Brings daylight with every chirp" },
        { name: "Skye", description: "Born to soar, happy to perch" },
        { name: "Rio", description: "Celebration of feathers and rhythm" },
        { name: "Piper", description: "Whistles a tune that steals your heart" },
      ],
      Elegant: [
        { name: "Jewel", description: "Precious gem of iridescent feathers" },
        { name: "Bianca", description: "White-winged grace in pure form" },
        { name: "Aria", description: "A melody that lingers in the air" },
        { name: "Opal", description: "Shifting colors like morning sky" },
        { name: "Swan", description: "Poised and graceful beyond compare" },
        { name: "Odette", description: "Swan queen of the tranquil lake" },
      ],
      Nature: [
        { name: "Wren", description: "Forest songbird with a mighty voice" },
        { name: "Raven", description: "Mysterious intelligence in black silk" },
        { name: "Finch", description: "Gentle flutter among garden blossoms" },
        { name: "Heron", description: "Patient stillness by the water's edge" },
        { name: "Lark", description: "Heralds the dawn with joyful notes" },
        { name: "Robin", description: "Red-breasted herald of springtime" },
      ],
    },
    Male: {},
    Female: {},
  },
  Hamster: {
    Either: {
      Cute: [
        { name: "Pebble", description: "Tiny and smooth, fits in your palm" },
        { name: "Chibi", description: "Japanese for tiny, which is perfect" },
        { name: "Fuzzball", description: "Rolling sphere of pure adorableness" },
        { name: "Button", description: "Little round fastener of happiness" },
        { name: "Mochi", description: "Squishy and sweet, a bite-sized joy" },
        { name: "Dumpling", description: "Pocket-sized parcel of delight" },
      ],
      Funny: [
        { name: "Sir Squeaks-a-Lot", description: "Philosophical debates at 3 AM" },
        { name: "Ham Solo", description: "The cheek pouch smuggler" },
        { name: "Cheesewheel", description: "Rolling toward the nearest snack" },
        { name: "Tater Tot", description: "Golden crispy potato on tiny legs" },
        { name: "Puff Daddy", description: "Collecting bedding like royalty" },
        { name: "Squeakquel", description: "The sequel is somehow louder" },
      ],
      "Food Inspired": [
        { name: "Nacho", description: "Cheesy little companion with crunch" },
        { name: "Sesame", description: "Open up, treat time" },
        { name: "Oreo", description: "Dark and light, perfectly layered" },
        { name: "Pancake", description: "Flat round friend in the morning" },
        { name: "Gumbo", description: "Mixed-up spicy ball of energy" },
        { name: "Cheddar", description: "Sharp little personality in orange" },
      ],
    },
    Male: {},
    Female: {},
  },
  Fish: {
    Either: {
      Classic: [
        { name: "Finn", description: "Classic name for any fish with fins" },
        { name: "Gilbert", description: "Gilled gentleman of the aquarium" },
        { name: "Neptune", description: "God of the deep, ruler of the bowl" },
      ],
      Fantasy: [
        { name: "Splash", description: "Magical ripple in a watery world" },
        { name: "Ariel", description: "Dreaming of worlds above the surface" },
        { name: "Caspian", description: "Mysterious sea of ancient tales" },
        { name: "Nemo", description: "Brave explorer of the great blue" },
        { name: "Draco", description: "Water dragon in miniature form" },
      ],
      Nature: [
        { name: "Coral", description: "Vibrant reef dweller, colorful and alive" },
        { name: "River", description: "Flowing with grace and purpose" },
        { name: "Splash", description: "Droplet of energy in the tank" },
        { name: "Shimmer", description: "Glinting scales like sunlight on water" },
        { name: "Tide", description: "Coming and going with gentle rhythm" },
      ],
    },
    Male: {},
    Female: {},
  },
  Horse: {
    Male: {
      Classic: [
        { name: "Thunder", description: "Hooves drumming across open plains" },
        { name: "Apollo", description: "Sun-chariot steed with glowing coat" },
        { name: "Clyde", description: "Gentle giant with a steady gait" },
        { name: "Blaze", description: "Forehead star marking a fiery spirit" },
        { name: "Archer", description: "Straight shooter with aim for glory" },
        { name: "Cobalt", description: "Blue-gray metal, strong and true" },
      ],
      Strong: [
        { name: "Titan", description: "Colossus of the stable, unshakable" },
        { name: "Hercules", description: "Legendary strength in every stride" },
        { name: "Goliath", description: "Massive presence, gentle heart" },
        { name: "Samson", description: "Unmatched power in mane and muscle" },
        { name: "Mammoth", description: "Ancient strength, modern grace" },
        { name: "Viking", description: "Nordic raider of the racetrack" },
      ],
      Royal: [
        { name: "King", description: "Monarch of the pasture, noble and proud" },
        { name: "Caesar", description: "Imperial commander of the herd" },
        { name: "Pharaoh", description: "Egyptian royalty under the sun" },
        { name: "Prince", description: "Royal bloodline with a gentle nuzzle" },
        { name: "Sultan", description: "Majesty on four hooves" },
        { name: "Emperor", description: "Supreme ruler of the corral" },
      ],
    },
    Female: {
      Classic: [
        { name: "Dawn", description: "First light over a misty meadow" },
        { name: "Willow", description: "Graceful as branches by the stream" },
        { name: "Misty", description: "Morning fog rolling across the hills" },
        { name: "Pearl", description: "Lustrous beauty hidden in a shell" },
        { name: "Ruby", description: "Deep red gem of passion and fire" },
        { name: "Star", description: "Guiding light on the night ride" },
      ],
      Elegant: [
        { name: "Bella", description: "Beautiful in Italian, beautiful in life" },
        { name: "Grace", description: "Effortless poise in every canter" },
        { name: "Aria", description: "Melodic gallop, song of the wind" },
        { name: "Sierra", description: "Mountain range of elegance and height" },
        { name: "Vienna", description: "European charm in every step" },
        { name: "Anastasia", description: "Resurrection of classic beauty" },
      ],
      Royal: [
        { name: "Duchess", description: "Noble mare with a regal bearing" },
        { name: "Empress", description: "Empire builder, one gallop at a time" },
        { name: "Titania", description: "Fairy queen of the enchanted forest" },
        { name: "Regina", description: "Queen in Latin, queen in spirit" },
        { name: "Maharani", description: "Indian princess on the open range" },
        { name: "Queen", description: "Bow before her majestic whinny" },
      ],
    },
    Either: {},
  },
  Turtle: {
    Either: {
      Classic: [
        { name: "Shelly", description: "A classic for a shelled companion" },
        { name: "Moss", description: "Green-backed slowpoke of the garden" },
        { name: "Bubbles", description: "Trailing ripples in a glass home" },
      ],
      Funny: [
        { name: "Slowpoke", description: "Life is a journey, not a race" },
        { name: "Turbo", description: "Maximum speed: 0.3 mph" },
        { name: "Sir Hides-a-Lot", description: "Expert in the art of vanishing" },
        { name: "Flash", description: "The fastest joke in the reptile world" },
        { name: "Snapper", description: "Warning: personal space enthusiast" },
      ],
      Nature: [
        { name: "Moss", description: "Camouflaged and content in the wild" },
        { name: "Pebble", description: "Blending into the stream bed" },
        { name: "Reed", description: "Swaying gently by the pond's edge" },
        { name: "Brook", description: "Flowing easy, taking it slow" },
        { name: "Sage", description: "Ancient wisdom in a steady gaze" },
      ],
    },
    Male: {},
    Female: {},
  },
};

const DEFAULT_NAMES: NameEntry[] = [
  { name: "Lucky", description: "Fortunate to have found you" },
  { name: "Shadow", description: "Always a step behind, always close" },
  { name: "Smudge", description: "A little mark on your heart" },
  { name: "Pancake", description: "Flat, warm, and everyone loves one" },
  { name: "Whisper", description: "Soft sounds of a gentle soul" },
  { name: "Ember", description: "Glowing warmth from a tiny spark" },
  { name: "Comet", description: "Streaking through life with blazing joy" },
  { name: "Biscuit", description: "Golden-brown bundle of comfort" },
  { name: "Puddle", description: "A little splash of happiness" },
  { name: "Fable", description: "Every day is a story worth telling" },
  { name: "Tango", description: "Dancing through life two paws at a time" },
  { name: "Echo", description: "Bouncing back every bit of love" },
];

export function getNames(
  petType: PetType,
  gender: Gender,
  style: StyleType
): NameEntry[] {
  const byPet = NAMES_DB[petType];
  const byGender = byPet?.[gender];
  if (byGender?.[style]) return byGender[style]!;

  const byEither = byPet?.Either;
  if (byEither?.[style]) return byEither[style]!;

  return DEFAULT_NAMES;
}
