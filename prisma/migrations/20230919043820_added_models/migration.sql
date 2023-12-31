BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [SKU] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [price] DECIMAL(32,16) NOT NULL,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([SKU])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(25) NOT NULL,
    [body] NVARCHAR(100) NOT NULL,
    [productId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Comment_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([SKU]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
