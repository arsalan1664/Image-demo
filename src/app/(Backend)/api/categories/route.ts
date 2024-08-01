import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import CapitalizeWords from "@/lib/capitalizeWords";

export async function GET(request: NextRequest) {
  try {
    // Extract Bearer token from the Authorization header
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized: Bearer token missing or invalid" },
        { status: 401 }
      );
    }

    const bearerToken = authorizationHeader.substring(7); // Remove "Bearer " prefix

    // Example of a simple check
    if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
      return NextResponse.json(
        { message: "Unauthorized: Invalid Bearer token" },
        { status: 401 }
      );
    }

    // Now you can use the 'bearerToken' in your API logic

    // Assuming you have a 'db' object for database access.
    const categories = await db.categories.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: {
        posts: true,
        section: true,
      },
    }); // Retrieve all categories from the database.

    return NextResponse.json(
      {
        categories,
        message: "Categories retrieved successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Extract Bearer token from the Authorization header
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized: Bearer token missing or invalid" },
        { status: 401 }
      );
    }

    const bearerToken = authorizationHeader.substring(7); // Remove "Bearer " prefix

    // TODO: Implement token validation logic, for example, using a JWT library or checking against a database.

    // Example of a simple check
    if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
      return NextResponse.json(
        { message: "Unauthorized: Invalid Bearer token" },
        { status: 401 }
      );
    }

    // Now you can use the 'bearerToken' in your API logic

    // Assuming you have a 'db' object for database access.
    const body = await request.json();
    const { id } = body;

    // Check if the categories with the specified ID exists
    const existingCategoryItem = await db.categories.findUnique({
      where: {
        id,
      },
    });

    if (!existingCategoryItem) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

    // Delete the category with the specified ID
    await db.categories.delete({
      where: {
        id,
      },
    });

    const prevImage = existingCategoryItem.imageUrl;

    await fs.unlink(`public${prevImage}`);

    return NextResponse.json(
      {
        message: "Category deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
////////////////////////////////////////////
/////////////// formData //////////////////
//////////////////////////////////////////

export async function POST(request: NextRequest) {
  // Extract Bearer token from Authorization header
  const authorizationHeader = request.headers.get("Authorization");
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { info: "Unauthorized: Bearer token missing or invalid" },
      { status: 401 }
    );
  }

  const bearerToken = authorizationHeader.substring(7); // Remove "Bearer " prefix

  // Example of a simple check
  if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
    return NextResponse.json(
      { info: "Unauthorized: Invalid Bearer token" },
      { status: 401 }
    );
  }

  // Image handling (replace with your preferred storage solution)
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const metaTitle = formData.get("meta-title") as string;
  const metaDescription = formData.get("meta-description") as string;
  const cover_image = formData.get("cover-image") as any;
  const section = formData.get("section") as any; // Use Next.js built-in formData()

  if (!title || !description) {
    return;
  }

  const existingItem = await db.categories.findFirst({
    where: {
      title,
    },
  });

  if (existingItem) {
    return NextResponse.json(
      { info: "Category with this title already exists" },
      { status: 200 }
    );
  }

  const imageName = `${Date.now()}-${cover_image.name}`; // Unique filename
  try {
    // Example: Save to local filesystem (replace with your storage solution)
    const fs = require("fs/promises");
    const dirPath = `public/uploads/covers/`;
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(
      `public/uploads/covers/${imageName}`,
      cover_image.stream()
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Image upload failed" },
      { status: 400 }
    );
  }

  function generateId(title: string) {
    const formattedTitle = title.replace(/\s+/g, "-");
    const uuid = uuidv4();
    return `${formattedTitle}-${uuid.substring(0, 8)}`;
  }

  const id = generateId(title);

  const category = await db.categories.create({
    data: {
      id,
      title: CapitalizeWords(title),
      metaTitle,
      description,
      metaDescription,
      slug: "body.Slug", // Modify as needed (e.g., generate slug from title)
      imageUrl: `/uploads/covers/${imageName}`, // Image URL path
      section: { connect: { id: section } },
      articles: "body.Article", // Update based on your data structure
    },
  });

  return NextResponse.json(
    {
      // category: category,
      success: "Category created successfully",
    },
    { status: 201 }
  );
}

export async function PUT(request: NextRequest) {
  try {
    // Extract Bearer token from the Authorization header
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: Bearer token missing or invalid" },
        { status: 401 }
      );
    }

    const bearerToken = authorizationHeader.substring(7); // Remove "Bearer " prefix

    // TODO: Implement token validation logic, for example, using a JWT library or checking against a database.

    // Example of a simple check
    if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
      return NextResponse.json(
        { info: "Unauthorized: Invalid Bearer token" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const metaTitle = formData.get("meta-title") as string;
    const metaDescription = formData.get("meta-description") as string;
    const cover_image = formData.get("cover-image") as any;
    const section = formData.get("section") as any;

    // Assuming you have a 'db' object for database access.
    const existingItem = await db.categories.findUnique({
      where: {
        id,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ info: "ID not matched" }, { status: 404 });
    }

    const imageName = `${Date.now()}-${cover_image.name}`; // Unique filename

    if (cover_image.name !== "undefined") {
      try {
        // Example: Save to local filesystem (replace with your storage solution)

        await fs.writeFile(
          `public/uploads/covers/${imageName}`,
          cover_image.stream()
        );
      } catch (error) {
        console.error(error);
        return NextResponse.json(
          { error: "Image upload failed" },
          { status: 400 }
        );
      }
    }

    const dataToUpdate: any = {
      title: CapitalizeWords(title),
      metaTitle,
      description,
      metaDescription,
      slug: "body.Slug",
      section: { connect: { id: section } },
      articles: "body.Article",
    };

    if (cover_image.name !== "undefined") {
      dataToUpdate.imageUrl = `/uploads/covers/${imageName}`;
    } else {
      dataToUpdate.imageUrl = `${existingItem?.imageUrl}`;
    }

    const updatedItem = await db.categories.update({
      where: {
        id,
      },
      data: dataToUpdate,
    });
    // delete prev image
    const prevImage = existingItem.imageUrl;
    if (cover_image.name !== "undefined") {
      await fs.unlink(`public${prevImage}`);
    }
    return NextResponse.json(
      {
        category: updatedItem,
        success: "Category updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
