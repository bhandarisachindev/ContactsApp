# 📇 Contacts Web App

A responsive and minimalist Contacts Web App built with HTML, CSS, and JavaScript. Easily add, view, and manage contacts — with all data stored locally in your browser.

## 🔗 Live Preview

👉 [View Live App](https://contacts-app-seven-chi.vercel.app/)

---

## 🚀 Features

- 📥 Add contacts with:
  - Name (required)
  - Phone number (required, validated)
  - Email (optional, validated)
  - Profile image URL (optional with fallback)
- 📋 View all contacts in a clean, card-based layout
- 👆 Click on a contact to see detailed info in an overlay
- 💾 Auto-saves data using `localStorage`
- 📱 Fully responsive and mobile-friendly

---

## 📝 How It Works

1. **Add a Contact:**
   - Click the floating **+** button to open the form.
   - Enter name and number (mandatory).
   - Optionally enter a valid email and image URL.
   - Click **Add** to save.

2. **Display & Interaction:**
   - Contacts appear as cards in the main list.
   - Clicking on a card opens a larger overlay with full details.
   - If image loading fails, a default icon is shown.

3. **Data Persistence:**
   - All contacts are saved in the browser’s `localStorage`.
   - They remain available even after page reloads or browser restarts.

---

## ⚠️ Validation Rules

- ✅ Name and phone number are required.
- 📞 Phone numbers must start with 6–9 and be exactly 10 digits.
- 📧 Email (if entered) must follow standard format.
- 🖼️ Broken or missing image URLs automatically fallback to a default image.

---

## 📷 Screenshots

### 🔹 Add Contact Form
![Add Contact](assets/.png)

### 🔹 Contact List
![Contact List](assets/.png)

### 🔹 Contact Detail Overlay
![Contact Overlay](assets/.png)

---

## 📬 Feedback

I'd love your thoughts and suggestions!

- 📝 [Submit feedback using this Google Form](https://forms.gle/womwzi7Li9cG61TS7)

Or, feel free to open an issue or PR on the repository.

---

**Built with ❤️ using pure HTML, CSS & JavaScript**