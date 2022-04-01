/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Route, Attachment, Message, User } from "@prisma/client";

export class RouteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RouteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteFindManyArgs>
  ): Promise<number> {
    return this.prisma.route.count(args);
  }

  async findMany<T extends Prisma.RouteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteFindManyArgs>
  ): Promise<Route[]> {
    return this.prisma.route.findMany(args);
  }
  async findOne<T extends Prisma.RouteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteFindUniqueArgs>
  ): Promise<Route | null> {
    return this.prisma.route.findUnique(args);
  }
  async create<T extends Prisma.RouteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteCreateArgs>
  ): Promise<Route> {
    return this.prisma.route.create<T>(args);
  }
  async update<T extends Prisma.RouteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteUpdateArgs>
  ): Promise<Route> {
    return this.prisma.route.update<T>(args);
  }
  async delete<T extends Prisma.RouteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteDeleteArgs>
  ): Promise<Route> {
    return this.prisma.route.delete(args);
  }

  async findAttachments(
    parentId: string,
    args: Prisma.AttachmentFindManyArgs
  ): Promise<Attachment[]> {
    return this.prisma.route
      .findUnique({
        where: { id: parentId },
      })
      .attachments(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.route
      .findUnique({
        where: { id: parentId },
      })
      .messages(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.route
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }
}
