/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Message, Attachment, Route } from "@prisma/client";

export class MessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>
  ): Promise<number> {
    return this.prisma.message.count(args);
  }

  async findMany<T extends Prisma.MessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>
  ): Promise<Message[]> {
    return this.prisma.message.findMany(args);
  }
  async findOne<T extends Prisma.MessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindUniqueArgs>
  ): Promise<Message | null> {
    return this.prisma.message.findUnique(args);
  }
  async create<T extends Prisma.MessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageCreateArgs>
  ): Promise<Message> {
    return this.prisma.message.create<T>(args);
  }
  async update<T extends Prisma.MessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageUpdateArgs>
  ): Promise<Message> {
    return this.prisma.message.update<T>(args);
  }
  async delete<T extends Prisma.MessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageDeleteArgs>
  ): Promise<Message> {
    return this.prisma.message.delete(args);
  }

  async findAttachments(
    parentId: string,
    args: Prisma.AttachmentFindManyArgs
  ): Promise<Attachment[]> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .attachments(args);
  }

  async getRoute(parentId: string): Promise<Route | null> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .route();
  }
}
