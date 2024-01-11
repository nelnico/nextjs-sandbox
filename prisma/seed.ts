import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { name: "TP Link UB500 Bluetooth 5.0 Nano USB Adapter" },
    update: {},
    create: {
      name: "TP Link UB500 Bluetooth 5.0 Nano USB Adapter",
      url: "https://www.takealot.com/tp-link-ub500-bluetooth-5-0-nano-usb-adapter/PLID73895649",
      price: 269,
    },
  });

  await prisma.product.upsert({
    where: {
      name: "TP-Link DECO S7 3 Pack AC1900 Whole Home Mesh WI-FI System",
    },
    update: {},
    create: {
      name: "TP-Link DECO S7 3 Pack AC1900 Whole Home Mesh WI-FI System",
      url: "https://www.takealot.com/tp-link-deco-s7-3-pack-ac1900-whole-home-mesh-wi-fi-system/PLID91521415",
      price: 3699,
    },
  });

  await prisma.product.upsert({
    where: {
      name: "Kindle Paperwhite 10th Gen Wi-Fi with S/O 8GB Cover Bundle",
    },
    update: {},
    create: {
      name: "Kindle Paperwhite 10th Gen Wi-Fi with S/O 8GB Cover Bundle",
      url: "https://www.takealot.com/kindle-paperwhite-10th-gen-wi-fi-with-s-o-8gb-cover-bundle/PLID53707651",
      price: 2999,
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
