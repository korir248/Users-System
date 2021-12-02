use UsersSystem
go

-- create table projects(project_id int not null identity(1,1),project_name nvarchar(50), date_created date,isDeleted bit default 0)

-- insert into projects(project_name,date_created) values('User System','2021-12-2')
-- select * from projects

create or alter proc spDeleteProject(@id int)
as 
begin 
    update projects set isDeleted = 1 where project_id = @id
end 
go

-- exec spDeleteProject 2

create or alter proc spCreateProject (@name nvarchar(50), @date_created date)
as 
begin 
    insert into projects(project_name,date_created) values(@name,@date_created)
end 
go

-- exec spCreateProject 'Pearl Motors', '2021-11-30'

create or alter proc spGetProjects
as 
begin 
    select project_id,project_name,date_created from projects where isDeleted = 0
end 
go

-- exec spGetProjects

create or alter proc spGetSpecificProject(@id nvarchar(50))
as 
begin 
    select project_id,project_name,date_created from projects where isDeleted = 0 and project_id = @id
end 
go

-- exec spGetSpecificProject 1