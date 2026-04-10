# Ki'bok Coffee SMA — Final Menu Implementation Prompt

Use this prompt with Claude Code to implement or update the Ki'bok Coffee website menu. Copy everything below the line.

---

## Prompt

You are updating the Ki'bok Coffee SMA website menu to match the FINAL printed menu. The site is built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and next-intl (locales: en, es, ja). The design uses a warm, artisanal aesthetic with dark (kibok-ink #1a1a18) and cream (#f4ede4) alternating sections, gold (#d4a853) accents, and linocut-style stamp decorations.

### Menu Structure

The physical menu has TWO sides: **Drinks (Café)** and **Food (Alimentos)**. Mirror this as a tabbed interface on the web.

---

### DRINKS — Full Item List

**ESPRESSO BAR**
| Item | Price | Temp |
|------|-------|------|
| Long Black | $50 | Hot |
| Espresso | $55 | Hot |
| Espresso Allongé (Paris — double espresso, different timings, 50-second extraction) | $55 | Hot |
| Americano | $45 | Hot/Cold |

**MILK BAR (Con Leche)**
| Item | Price | Temp |
|------|-------|------|
| Cortado | $50 | Hot |
| Macchiato | $50 | Hot |
| Cappuccino | $55 | Hot/Cold |
| Piccolo (short milk drink with one espresso shot) | $60 | Hot |
| Flat White | $65 | Hot |
| Latte | $60 | Hot/Cold |
| Mocha | $60 | Hot/Cold |
| Dirty Chai | $65 | Hot/Cold |
| Pumpkin Latte ⚑ SEASONAL | $75 | Hot/Cold |

**COFFEE FREE (Sin Café)**
| Item | Price | Temp |
|------|-------|------|
| Chocolate | $60 | Hot/Cold |
| Taro Latte | $65 | Hot/Cold |
| Chai Latte | $70 | Hot/Cold |
| Tea & Infusions (Tés y Tisanas) | $70 | Hot |
| Golden Milk | $75 | Hot |
| Matcha | $90 | Hot/Cold |

**HOUSE COFFEE (De la Casa)**
| Item | Price | Temp |
|------|-------|------|
| Cococcino (cappuccino with a dash of coconut oil) | $60 | Hot/Cold |
| Oppenheimer | $65 | Hot |
| Hemingway (double Cuban espresso, cinnamon powder, 2oz hot milk) | $70 | Hot |
| Latte Brulée | $70 | Hot |
| Latte de Olla | $65 | Hot/Cold |
| Buzz Latte (latte with double espresso shot & honey) | $70 | Hot |
| Choco-Oat (organic cacao, oat milk & cinnamon) | $95 | Hot |
| Cold Brew (room temp water infused, served on the rocks) | $70 | Cold |
| Espresso Tonic (espresso, ice, lemon slice & tonic) | $75 | Cold |
| Cold Brew & Tonic (tonic water, 2oz cold brew, lemon slice) | $80 | Cold |
| Cold Brew de Olla (cold brew with Mexican spices) | $90 | Cold |

**SLOW BAR**
| Item | Price | Temp |
|------|-------|------|
| V60 | $75 | Hot |
| Chemex | $80 | Hot |

**HOUSE DESSERT (Postre de la Casa)**
| Item | Price |
|------|-------|
| Affogato (vanilla gelato, 1 espresso shot) | $85 |

**SOFT DRINKS (Otras Bebidas)**
| Item | Price |
|------|-------|
| Bottled Water | $35 |
| Coconut Water | $42 |
| Lemonade | $45 |
| Naranjada | $50 |
| Orange Crush | $50 |
| Mineral Water (Mx) | $50 |
| San Pellegrino Min/W | $60 |
| San Pellegrino Flavoured | $70 |
| Agua Felix (Flavoured) | $70 |
| Artesanal Kombucha | $80 |
| Ginger Beer | $80 |

**DRINK EXTRAS**
| Extra | Price |
|-------|-------|
| Extra Shot | +$15 |
| Special Milk (oat · almond · soy · lactose free) | +$20 |
| Cold Preparations | +$10 |
| Syrups: Vanilla, Café de Olla | +$15 |

---

### FOOD — Full Item List

**ENTRÉES (Entradas)**
| Item | Price | Notes |
|------|-------|-------|
| Hummus Dish (house made hummus, black olives, red onion, cilantro & paprika, totopos or pita) | $110 | |
| Fruit Plate (seasonal fruit, natural yogurt, granola & honey) | $105 | |
| Waffles (2 pieces, banana, strawberry, maple syrup & butter) | $125 | |
| Avocado Toast (toasted ciabatta, guacamole, eggs & baked bacon) | $160 | |
| Toast a la Mexicana (toasted ciabatta, chopped bacon, refried beans, eggs a la Mexicana, avocado) | $200 | |
| Morning Bagel (lettuce, cream cheese, crispy bacon, egg, mayonnaise macha) | $125 | |
| Bagel & Coffee (sourdough bagel, butter & jam — includes americano) | $90 | |
| American Breakfast (includes americano or latte) | $190 | |

**CIABATTA SANDWICH**
Shared description: "Sourdough ciabatta, Oaxaca cheese, lettuce & tomato. Accompanied by a protein of your choice."
| Protein | Price |
|---------|-------|
| BLT | $110 |
| Chicken | $115 |
| Arrachera | (no price listed) |

**QUINOA BOWLS**
| Item | Price | Diet |
|------|-------|------|
| El Rancho (quinoa & baked vegetables, two fried eggs, beans & ranchera sauce) | $120 | |
| Sin Carne (quinoa & baked vegetables, avocado & hummus) | $120 | 🌱 Vegan |

**PLATTERS (Platillos)**
| Item | Price | Diet |
|------|-------|------|
| Chilaquiles Verdes (tortilla chips in homemade green sauce, cheese, onion & cilantro) | $120 | 🌱 Vegan |
| Huevos Rancheros (tortilla, fried eggs, red sauce, beans, Oaxaca cheese, onion, cilantro) | $135 | |
| Special Omelette (spinach & goat cheese, salad & pesto) | $135 | 🥬 Vegetarian |
| Huevos Divorciados (tortilla, fried eggs, beans, Oaxaca cheese, onion, cilantro, green & red sauce) | $140 | |
| Enchiladas Verdes/Rojas (homemade green sauce, chicken, red onion, cheese, cream & cilantro, 4 pcs) | $150 | |
| Enchiladas de Mole (traditional almond mole, chicken, red onion, cheese, cream & cilantro, 4 pcs) | $165 | |
| Enfrijoladas (bean cream tortillas, ground meat & sausage, cream cheese, onion & cilantro) | $120 | |
| Bone Broth / Caldo de Hueso (egg, avocado, quinoa, onion, coriander & lemon) | $170 | |
| Calabrese Toast (sourdough ciabatta, spicy Italian salami, guacamole, eggs any style) | $175 | |

**FOOD EXTRAS**
| Extra | Price |
|-------|-------|
| Avocado | $30 |
| Bacon | $25 |
| Egg | $20 |
| Quinoa | $25 |

**IMPORTANT NOTES TO DISPLAY:**
- Patience note: "In order to serve you always fresh food preparations, please allow us approximately fifteen minutes to cook and bring it to your table. We truly appreciate your patience!"
- Biodegradable containers cost $5.

---

### Implementation Requirements

1. **Data structure**: Create typed interfaces (MenuItemDef, MenuSectionDef, MenuExtraDef) with fields for key, price, temp (hot/cold/both), dietary (vegan/vegetarian), and seasonal flag.

2. **Tabbed interface**: Two tabs — "Coffee & Drinks" / "Food" — with a sticky tab bar below the navbar. Use Framer Motion for the animated gold underline indicator and tab content transitions.

3. **Temperature indicators**: Small colored dots next to drink names — terracotta filled (hot), sage outline (cold), split gradient (both). Include a legend at the top of the drinks tab.

4. **Dietary badges**: Small pill badges — green for Vegan, gold for Vegetarian. Seasonal badge in terracotta for Pumpkin Latte.

5. **Extras cards**: Styled with dashed borders to match the boxed extras section on the physical menu. Place at bottom of each tab.

6. **Alternating sections**: Dark (kibok-ink) and cream backgrounds for each category, with stamp graphics.

7. **Dotted leader lines**: Between item name and price (like the physical menu).

8. **i18n**: All menu items, category names, extras, badges, and notes must be translated in en.json, es.json, and ja.json. Spanish category names should match the physical menu: "Con Leche", "Sin Café", "De la Casa", "Otras Bebidas", "Entradas", "Platillos", etc.

9. **Home page carousel**: Update MenuCarousel highlights to use items from the new menu (espresso, cortado, cococcino, chilaquiles_verdes, cold_brew, avocado_toast, latte, affogato).

10. **Prices are in Mexican Pesos (MXN)** — display as "$XX" format.

### Files to update
- `src/lib/constants.ts` — Menu data structure
- `src/i18n/messages/en.json` — English translations
- `src/i18n/messages/es.json` — Spanish translations
- `src/i18n/messages/ja.json` — Japanese translations
- `src/app/[locale]/menu/MenuPageContent.tsx` — Main menu page component
- `src/components/home/MenuCarousel.tsx` — Home page highlights
- `src/app/globals.css` — Any new styles (temp-dot-both gradient, etc.)

Be creative with the design while staying true to the Ki'bok brand: warm, artisanal, dark & moody with gold accents and linocut stamp decorations.
