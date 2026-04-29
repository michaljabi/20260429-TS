/**
 * System Zarządzania Subskrypcjami
 *
 * Logika biznesowa:
 * - Oblicz cenę miesięczną na podstawie planu ('basic', 'standard', 'premium')
 * - Zastosuj zniżkę przy rozliczeniu rocznym (20% taniej)
 * - Określ status konta na podstawie płatności i daty wygaśnięcia
 *
 * TODO do migracji:
 * 1. Zmień rozszerzenie pliku na .ts
 * 2. Zdefiniuj enum SubscriptionPlan
 * 3. Zdefiniuj interfejs User
 * 4. Dodaj typy do parametrów funkcji i zwracanych wartości
 */

export function calculateSubscriptionPrice(planType, isAnnual) {
  const basePrices = {
    basic: 10,
    standard: 20,
    premium: 50,
  };

  let price = basePrices[planType] || 0;

  if (isAnnual) {
    price = price * 12 * 0.8; // 20% zniżki
  }

  return price;
}

export function getSubscriptionStatus(user) {
  const now = new Date();

  if (!user.isActive) {
    return "inactive";
  }

  if (user.expiryDate < now) {
    return "expired";
  }

  if (user.balance < 0) {
    return "pending_payment";
  }

  return "active";
}

const sampleUser = {
  id: 1,
  name: "John Doe",
  plan: "standard",
  isAnnual: true,
  isActive: true,
  expiryDate: new Date("2026-12-31"),
  balance: 100,
};

console.log(`Użytkownik: ${sampleUser.name}`);
console.log(
  `Cena planu: ${calculateSubscriptionPrice(sampleUser.plan, sampleUser.isAnnual)}`,
);
console.log(`Status: ${getSubscriptionStatus(sampleUser)}`);
