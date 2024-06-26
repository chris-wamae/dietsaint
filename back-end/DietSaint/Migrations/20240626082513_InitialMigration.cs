using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DietSaint.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Foods",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EnergyNutrients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Starch = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lactose = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Calories = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sugars = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Carbohydrate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnergyNutrients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EnergyNutrients_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Minerals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Magnesium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Calcium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Potassium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Zinc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Iron = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Minerals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Minerals_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UngroupedNutrients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Protein = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Water = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fiber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UngroupedNutrients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UngroupedNutrients_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vitamins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VitaminB6 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminC = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vitamins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vitamins_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EnergyNutrients_FoodId",
                table: "EnergyNutrients",
                column: "FoodId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Minerals_FoodId",
                table: "Minerals",
                column: "FoodId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UngroupedNutrients_FoodId",
                table: "UngroupedNutrients",
                column: "FoodId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vitamins_FoodId",
                table: "Vitamins",
                column: "FoodId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EnergyNutrients");

            migrationBuilder.DropTable(
                name: "Minerals");

            migrationBuilder.DropTable(
                name: "UngroupedNutrients");

            migrationBuilder.DropTable(
                name: "Vitamins");

            migrationBuilder.DropTable(
                name: "Foods");
        }
    }
}
