// "use client";

// import { useState, useMemo } from "react";

// export default function Component() {
//   const [selectedTags, setSelectedTags] = useState([]);
//   const tags = [
//     { id: 1, label: "Lifestyle" },
//     { id: 2, label: "Technology" },
//     { id: 3, label: "Fashion" },
//     { id: 4, label: "Travel" },
//     { id: 5, label: "Food" },
//     { id: 6, label: "Sports" },
//   ];
//   const content = [
//     {
//       id: 1,
//       title: "The Ultimate Guide to Sustainable Living",
//       tags: ["Lifestyle", "Technology"],
//       image: "/placeholder.svg",
//       description:
//         "Discover practical tips and strategies to reduce your carbon footprint and live a more eco-friendly lifestyle.",
//     },
//     {
//       id: 2,
//       title: "The Latest Trends in Wearable Tech",
//       tags: ["Technology", "Fashion"],
//       image: "/placeholder.svg",
//       description:
//         "Explore the cutting-edge world of wearable technology and how it's transforming the fashion industry.",
//     },
//     {
//       id: 3,
//       title: "10 Must-Visit Destinations for the Adventurous Traveler",
//       tags: ["Travel", "Lifestyle"],
//       image: "/placeholder.svg",
//       description:
//         "Get inspired and plan your next epic adventure with our curated list of the world's most breathtaking destinations.",
//     },
//     {
//       id: 4,
//       title: "The Art of Crafting the Perfect Cocktail",
//       tags: ["Food", "Lifestyle"],
//       image: "/placeholder.svg",
//       description:
//         "Learn the secrets of mixology and impress your friends with your bartending skills.",
//     },
//     {
//       id: 5,
//       title: "The Rise of Esports: A Closer Look",
//       tags: ["Sports", "Technology"],
//       image: "/placeholder.svg",
//       description:
//         "Explore the rapidly growing world of competitive gaming and how it's transforming the sports industry.",
//     },
//   ];
//   const filteredContent = useMemo(() => {
//     if (selectedTags.length === 0) {
//       return content;
//     }
//     return content.filter((item) =>
//       selectedTags.every((tag) => item.tags.includes(tag))
//     );
//   }, [selectedTags, content]);

//   const handleTagClick = (tag: anyy) => {
//     if (selectedTags.includes(tag)) {
//       setSelectedTags(selectedTags.filter((t) => t !== tag));
//     } else {
//       setSelectedTags([...selectedTags, tag]);
//     }
//   };
//   return (
//     <div className="flex flex-col gap-8">
//       <div className="bg-card p-6 rounded-lg shadow-sm">
//         <h2 className="text-2xl font-bold mb-4">Filter by Tags</h2>
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <button
//               key={tag.id}
//               onClick={() => handleTagClick(tag.label)}
//               className={`px-3 py-1 rounded-full transition-colors ${
//                 selectedTags.includes(tag.label)
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-muted-foreground hover:bg-muted/80"
//               }`}
//             >
//               {tag.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredContent.map((item) => (
//           <div
//             key={item.id}
//             className="bg-card p-4 rounded-lg shadow-sm overflow-hidden"
//           >
//             <img
//               src="/placeholder.svg"
//               alt={item.title}
//               width={400}
//               height={225}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//             <p className="text-muted-foreground mb-4">{item.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {item.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     selectedTags.includes(tag)
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-muted text-muted-foreground"
//                   }`}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
