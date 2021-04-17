using Microsoft.EntityFrameworkCore.Migrations;

namespace ZManagerResources.Migrations
{
    public partial class FixControleRecurso : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdRecurso",
                table: "ControleRecurso");

            migrationBuilder.AddColumn<int>(
                name: "RecursoId",
                table: "ControleRecurso",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ControleRecurso_RecursoId",
                table: "ControleRecurso",
                column: "RecursoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ControleRecurso_Recurso_RecursoId",
                table: "ControleRecurso",
                column: "RecursoId",
                principalTable: "Recurso",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ControleRecurso_Recurso_RecursoId",
                table: "ControleRecurso");

            migrationBuilder.DropIndex(
                name: "IX_ControleRecurso_RecursoId",
                table: "ControleRecurso");

            migrationBuilder.DropColumn(
                name: "RecursoId",
                table: "ControleRecurso");

            migrationBuilder.AddColumn<int>(
                name: "IdRecurso",
                table: "ControleRecurso",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
