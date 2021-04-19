using Microsoft.EntityFrameworkCore.Migrations;

namespace ZManagerResources.Migrations
{
    public partial class usuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Usuário",
                table: "ControleRecurso",
                newName: "Usuario");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Usuario",
                table: "ControleRecurso",
                newName: "Usuário");
        }
    }
}
