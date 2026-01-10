// "use client";
// import { useState } from "react";
// // import { Button } from "../ui/button";
// import { Menu, X } from "lucide-react";
// import clsx from "clsx";

// export const Nav = () => {
//   const navItems = [
//     { name: "Work", link: "#work" },
//     { name: "Services", link: "#services" },
//     { name: "Pricing", link: "#pricing" },
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="px-2 md:px-8 py-5 ">
//         <nav className="flex items-center justify-between">
//           {/* Logo + Desktop Nav */}
//           <div className="flex items-center gap-12">
//             <a
//               href="#"
//               className="text-xl md:text-2xl font-medium bg-linear-to-b from-[#41C4C6] to-white text-transparent bg-clip-text"
//             ></a>

//             <ul className="hidden md:flex gap-6 mt-0.5">
//               {navItems.map((item) => (
//                 <li key={item.name} className="text-xs">
//                   <a href={item.link}>{item.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Desktop CTA */}
//           {/* <Button
//             data-cal-link="aurolabs/15min"
//             data-cal-config='{"theme":"light"}'
//             variant="outline"
//             className="hidden md:block"
//           >
//             Book a call
//           </Button> */}

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//             className="md:hidden p-1.5 rounded-md hover:bg-gray-50/5 transition"
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               <X size={16} color="#849191" />
//             ) : (
//               <Menu size={16} color="#849191" />
//             )}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={clsx(
//           "md:hidden absolute left-0 w-full z-20 bg-[#040E0E] border-t transition-all duration-500 ease-in-out",
//           isMobileMenuOpen
//             ? "h-screen opacity-100 translate-y-0"
//             : "max-h-0 opacity-0 -translate-y-2"
//         )}
//       >
//         <ul className="flex flex-col gap-4 px-6 py-6 items-center justify-between">
//           <div className="flex items-center flex-col gap-6">
//             {navItems.map((item) => (
//               <li key={item.name} className="text-base">
//                 <a
//                   href={item.link}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block w-full"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </div>

//           <li className="w-full px-2.5 mt-6">
//             {/* <Button
//               data-cal-link="aurolabs/15min"
//               data-cal-config='{"theme":"light"}'
//               variant="outline"
//               className="mt-8 block w-full"
//             >
//               Book a call
//             </Button> */}
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };
