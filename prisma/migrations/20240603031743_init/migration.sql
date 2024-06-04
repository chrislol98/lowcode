-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "Post"("authorId");
