/* ===================== CLIENT GALLERIES DATA =====================
 *
 * Configuration file for unique client galleries.
 *
 * HOW TO ADD A NEW CLIENT:
 * 1. Copy one of the existing client objects below
 * 2. Change the "code" to a unique access code for that client
 * 3. Set "name" to the client's name
 * 4. Set "sessionType" (e.g., Wedding, Portrait, Event, etc.)
 * 5. Set "date" to the session date
 * 6. Set "message" to a personalized welcome message (optional)
 * 7. Replace the "photos" array with paths to the client's images
 *    - Each photo object needs: { src: "images/your-file.jpg", alt: "Description" }
 * 8. Save this file — the gallery page will automatically pick it up
 *
 * ACCESS CODE TIPS:
 * - Use something memorable but unique per client
 * - Example formats: "SARAH-W2026", "JOHN-PORTRAIT", "ADE-CREATIVE"
 * - Codes are case-sensitive
 */

const CLIENT_GALLERIES = [
  {
    code: "SARAH-W2026",
    name: "Sarah & James",
    sessionType: "Wedding",
    date: "March 15, 2026",
    message: "Congratulations on your beautiful wedding! Here are your edited photos. Feel free to download your favorites.",
    photos: [
      { src: "images/wedding 1.jpg", alt: "Sarah & James - Walking down the aisle" },
      { src: "images/wedding 2.jpg", alt: "Sarah & James - First dance" },
      { src: "images/wedding 3.jpg", alt: "Sarah & James - Ring exchange" },
      { src: "images/wedding 4.jpg", alt: "Sarah & James - Wedding party" },
      { src: "images/wedding 5.jpg", alt: "Sarah & James - Reception entrance" },
      { src: "images/wedding 6.jpg", alt: "Sarah & James - Sunset portraits" }
    ]
  },
  {
    code: "JOHN-PORTRAIT",
    name: "John Adewale",
    sessionType: "Portrait",
    date: "February 28, 2026",
    message: "Hey John! Your portrait session turned out amazing. Here are your final edits — enjoy!",
    photos: [
      { src: "images/portrait 1.jpg", alt: "John Adewale - Professional headshot" },
      { src: "images/portrait 2.jpg", alt: "John Adewale - Casual portrait" },
      { src: "images/portrait 3.jpg", alt: "John Adewale - Outdoor portrait" },
      { src: "images/portrait 6.jpg", alt: "John Adewale - Creative portrait" },
      { src: "images/portrait 7.jpg", alt: "John Adewale - Black & white portrait" },
      { src: "images/portrait 8.jpg", alt: "John Adewale - Studio portrait" }
    ]
  },
  {
    code: "FUNKE-EVENT",
    name: "Funke's Birthday",
    sessionType: "Event",
    date: "January 20, 2026",
    message: "Happy belated birthday Funke! What a celebration! Here are all the highlights from your party.",
    photos: [
      { src: "images/events 1.jpg", alt: "Funke's Birthday - Cake cutting" },
      { src: "images/events 2.jpg", alt: "Funke's Birthday - Group photo" },
      { src: "images/events 3.jpg", alt: "Funke's Birthday - Dancing" },
      { src: "images/events 4.jpg", alt: "Funke's Birthday - Speech moment" },
      { src: "images/events 5.jpg", alt: "Funke's Birthday - Decor details" },
      { src: "images/events 6.jpg", alt: "Funke's Birthday - Fun candid shots" }
    ]
  },
  {
    code: "TOBI-CREATIVE",
    name: "Tobi Akinola",
    sessionType: "Creative Direction",
    date: "March 5, 2026",
    message: "Tobi, your creative session was a vibe! Here are the final selects from the shoot.",
    photos: [
      { src: "images/creative 1.jpg", alt: "Tobi Akinola - Creative concept 1" },
      { src: "images/creative 2.jpg", alt: "Tobi Akinola - Creative concept 2" },
      { src: "images/creative 3.jpg", alt: "Tobi Akinola - Creative concept 3" },
      { src: "images/creative 4.jpg", alt: "Tobi Akinola - Creative concept 4" },
      { src: "images/creative 5.jpg", alt: "Tobi Akinola - Creative concept 5" },
      { src: "images/creative 6.jpg", alt: "Tobi Akinola - Creative concept 6" }
    ]
  }
];
