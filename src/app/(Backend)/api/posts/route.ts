import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { disconnect } from "process";
import CapitalizeWords from "@/lib/capitalizeWords";

//////////////////////////////////////////
////////////// formData //////////////////
//////////////////////////////////////////

export async function POST(request: NextRequest) {
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
  const categoryId = formData.get("category") as string;
  const tag = formData.get("tag") as string;
  const tagArry = tag.split(",");
  const image = formData.get("file") as any;
  const filetype = formData.get("Filetype") as any;
  const section = formData.get("section") as any;

  console.log(filetype, formData);

  const imageName = `${Date.now()}-${image.name}`;
  try {
    const dirPath = `public/uploads/posts/`;
    await fs.mkdir(dirPath, { recursive: true });

    await fs.writeFile(`${dirPath}${imageName}`, image.stream());
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Image upload failed" },
      { status: 400 }
    );
  }

  function generateId(title: string) {
    return CapitalizeWords(title).replace(/\s+/g, "-");
  }

  const post = await db.posts.create({
    data: {
      id: generateId(title),
      title: CapitalizeWords(title),
      description,
      category: { connect: { id: categoryId } },
      imageUrl: `/uploads/posts/${imageName}`, // Image URL path
      filetype,
      postTags: {
        connectOrCreate: tagArry.map((tag) => ({
          where: { id: tag },
          create: { tagId: tag },
        })),
      },

      // category:{ connect: { id: categoryId },
      //   slug: "body.Slug", // Modify as needed (e.g., generate slug from title)
      // category:{ connect: { id: categoryId },
      //   articles: "body.Article", // Update based on your data structure
    },
    include: { postTags: true }, // Include connected tags
  });

  return NextResponse.json(
    {
      success: "post created successfully",
    },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  try {
    // Extract Bearer token from the Authorization header
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

    const posts = await db.posts.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        postTags: true,
      },
    });

    return NextResponse.json(
      {
        posts,
        success: "Posts retrieved successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
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

  const formData = await request.formData();
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const categoryId = formData.get("category") as string;
  const tagss = formData.get("tag") as any;
  const tags = tagss ? tagss.split(",") : [];
  const image = formData.get("file") as any;
  const filetype = formData.get("Filetype") as any;
  const section = formData.get("section") as any; // Use Next.js built-in formData()

  const existingItem = await db.posts.findUnique({
    where: {
      id,
    },
  });

  if (!existingItem) {
    return NextResponse.json({ info: "Post not found" }, { status: 404 });
  }

  let imageName = `${Date.now()}-${image.name}`; // Unique filename
  if (image.name !== "undefined") {
    try {
      // Create the 'posts' directory if it doesn't existn
      const dirPath = `public/uploads/posts/`;
      await fs.mkdir(dirPath, { recursive: true });

      // Save the image to the 'posts' directory
      await fs.writeFile(`${dirPath}${imageName}`, image.stream());
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Image upload failed" },
        { status: 400 }
      );
    }
  }
  function generateId(title: string) {
    return CapitalizeWords(title).replace(/\s+/g, "-");
  }
  try {
    const existingTags = await db.postTag.findMany({
      where: { postId: existingItem.id },
    });

    const dataToUpdate: any = {
      id: generateId(title),
      title: CapitalizeWords(title),
      description,
      filetype,
      category: { connect: { id: categoryId } },
      postTags: {
        delete: existingTags.map((tag: any) => ({ id: tag.id })),
        // disconnect: existingTags.map((tag: any) => ({ id: tag.postId })),
        connectOrCreate: tags.map((tag: any) => ({
          where: { id: tag },
          create: { tagId: tag },
        })),
      },
    };

    if (image.name !== "undefined") {
      dataToUpdate.imageUrl = `/uploads/posts/${imageName}`;
    } else {
      dataToUpdate.imageUrl = `${existingItem?.imageUrl}`;
    }

    const post = await db.posts.update({
      where: { id },
      data: dataToUpdate,
      include: { postTags: true },
    });

    const prevImg = existingItem?.imageUrl;
    if (image.name !== "undefined") {
      await fs.unlink(`public${prevImg}`);
    }

    return NextResponse.json(
      {
        post: post,
        success: "Post update successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
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
    const formData = await request.formData();
    const id = formData.get("id") as string;

    const postToDelete = await db.posts.findUnique({
      where: { id },
      include: { postTags: true },
    });

    if (postToDelete && postToDelete.postTags.length > 0) {
      await Promise.all(
        postToDelete.postTags.map((tag: any) =>
          db.postTag.delete({ where: { id: tag.id } })
        )
      );
    }

    await db.posts.delete({ where: { id } }); // Delete the post after handling tags

    const prevImg = postToDelete?.imageUrl;
    await fs.unlink(`public${prevImg}`);

    return NextResponse.json(
      {
        success: "Posts deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
