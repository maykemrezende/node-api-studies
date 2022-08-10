import { Request, Response, NextFunction } from "express";
import { UserDto } from "../Dtos/UserDto"
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

@Route("api/users")
export class UserController extends Controller{
    @Get()
    public async getAll() : Promise<UserDto[]>{
        let users: UserDto[] = []

        let user: UserDto = {
            email: "teste",
            id: 1
        }

        users.push(user)

        return users
    }

}