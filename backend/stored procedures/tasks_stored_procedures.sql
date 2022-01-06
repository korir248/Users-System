SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  or alter  proc [dbo].[spGetTasks]
as 
begin 
    select task_id,task_name,project_name,t.isDeleted,t.isCompleted,isAssigned  from tasks t inner join projects p on p.project_id = t.project_id
end
GO

create  or alter  proc [dbo].[spDeleteTask] (@id int)
as 
begin 
    update tasks set isDeleted = 1 where task_id = @id 
end
GO

create  or alter  proc [dbo].[spCreateTasks](@task_name nvarchar(50), @id int)
as 
begin 
    insert into tasks(task_name,project_id) 
    values(@task_name,@id)
end
GO

create  or alter  proc [dbo].[spCompleteTask] (@id int)
as 
begin 
    update tasks set isCompleted = 1 where task_id = @id 
end

