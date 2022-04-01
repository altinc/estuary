import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AttachmentResolverBase } from "./base/attachment.resolver.base";
import { Attachment } from "./base/Attachment";
import { AttachmentService } from "./attachment.service";

@graphql.Resolver(() => Attachment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AttachmentResolver extends AttachmentResolverBase {
  constructor(
    protected readonly service: AttachmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
