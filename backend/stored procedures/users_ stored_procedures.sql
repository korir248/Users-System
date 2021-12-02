use UsersSystem
go

create or alter proc spLoginUser( @username nvarchar(50))
as 
begin 
    select username,password,isAdmin from users where isDeleted = 0 and username= @username
end
go

-- exec spLoginUser 'Nik123'

create or alter proc spGetUsers
as 
begin
    select * from users where isDeleted = 0
end
go

-- exec spGetUsers


create or alter proc spAddUser(@fullname nvarchar(50), @username nvarchar(50),@email nvarchar(50),@password nvarchar(50))
as 
begin 
    insert into dbo.users([fullname],[username],[email],[password])
    values(@fullname,@username,@email,@password)
end
go

-- exec  spAddUser 'Dan Ngetich', 'dancan','dan@gmail.com','dancan'

create or alter proc spDeleteUser(@email nvarchar(50))
as 
begin 
    update users set isDeleted = 1 where email = @email
end 
go

-- exec spDeleteUser 'mati@gmail.com'

create or alter proc spGetSpecificUser(@id int)
as 
begin 
    select id,username,email,isDeleted from users where id = @id and isDeleted = 0
end 
go

-- exec spGetSpecificUser 1