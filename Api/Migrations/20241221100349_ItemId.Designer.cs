﻿// <auto-generated />
using System;
using Api;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Api.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20241221100349_ItemId")]
    partial class ItemId
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Api.Authentication.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer")
                        .HasAnnotation("DefaultValue", 0);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean")
                        .HasAnnotation("DefaultValue", false);

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean")
                        .HasAnnotation("DefaultValue", false);

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean")
                        .HasAnnotation("DefaultValue", false);

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean")
                        .HasAnnotation("DefaultValue", false);

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Api.Models.Item", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<decimal>("UnitPrice")
                        .HasPrecision(9, 2)
                        .HasColumnType("numeric(9,2)")
                        .HasAnnotation("DefaultValue", 0);

                    b.HasKey("Id");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("Api.Models.ItemPicture", b =>
                {
                    b.Property<string>("PictureUrl")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ItemId")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("PictureUrl");

                    b.HasIndex("ItemId");

                    b.ToTable("ItemPictures");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("DefaultValue", 0);

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("DefaultValue", 0);

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("RoleId")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Name")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.Property<string>("Value")
                        .HasColumnType("text")
                        .HasAnnotation("DefaultValue", "");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Api.Models.ItemPicture", b =>
                {
                    b.HasOne("Api.Models.Item", "Item")
                        .WithMany("Pictures")
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Item");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Api.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Api.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Api.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Api.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Api.Models.Item", b =>
                {
                    b.Navigation("Pictures");
                });
#pragma warning restore 612, 618
        }
    }
}
