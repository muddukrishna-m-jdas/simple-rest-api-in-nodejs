module.exports = {
		HTTP_PORT : 3000,	
		URL_ROOT: "/api",
		DATABASE : "ORACLE",
				
		ORACLEDB : {
			ORACLEDBNAME : "ORACLE",
			ORA_DB_USER : "TESTUSER",
			ORA_DB_PASSWORD : "TESTUSER",
			ORA_DB_CONNECTION_STRING : "G1QGQ72J/O12CR201",
			ORA_DB_CONPOOL_MIN : 5,
			ORA_DB_CONPOOL_MAX : 10,
			ORA_DB_CONPOOL_INCREMENT : 1,
			
			QUERY_STRINGS : {
					SELECT_QUERY : 
								 `select id "id",
									entityType "entityType",
									canvas "canvas",
									owner "owner",
									dbms_lob.substr(params) "params"
								  from canvas_context_data`,
					WHERE_CLAUSE: `\n where id = :id`,
					
					CREATE_QUERY : `insert into canvas_context_data (
										entityType,
										canvas,
										owner,
										params
									  ) values (
										:entityType,
										:canvas,
										:owner,
										:params
									  ) returning id
									  into :id`,
									  
					
					UPDATE_QUERY :  `update canvas_context_data
									  set entityType = :entityType,
										canvas = :canvas,
										owner = :owner,
										params = :params
									  where id = :id`,

					DELETE_QUERY : `begin

									delete from canvas_context_data
									where id = :id;

									:rowcount := sql%rowcount;

								  end;`	
			}			
		},
		
		MYSQLDB : {
			MYSQLDBNAME : "MYSQL",
			MYSQL_USER : "TESTUSER",
			MYSQL_PASSWORD : "TESTUSER",
			MYSQL_CONNECTION_STRING : "G1QGQ72J/O12CR201",
			MYSQL_CONPOOL_MIN : 5,
			MYSQL_CONPOOL_MAX : 10,
			MYSQL_CONPOOL_INCREMENT : 1,
			
			QUERY_STRINGS : {
					SELECT_QUERY : 
								 `select id "id",
									entityType "entityType",
									canvas "canvas",
									owner "owner",
									dbms_lob.substr(params) "params"
								  from canvas_context_data`,
					WHERE_CLAUSE: `\n where id = :id`,
					
					CREATE_QUERY : `insert into canvas_context_data (
										entityType,
										canvas,
										owner,
										params
									  ) values (
										:entityType,
										:canvas,
										:owner,
										:params
									  ) returning id
									  into :id`,
									  
					
					UPDATE_QUERY :  `update canvas_context_data
									  set entityType = :entityType,
										canvas = :canvas,
										owner = :owner,
										params = :params
									  where id = :id`,

					DELETE_QUERY : `begin

									delete from canvas_context_data
									where id = :id;

									:rowcount := sql%rowcount;

								  end;`	
			}
			
		}
		
		

};
